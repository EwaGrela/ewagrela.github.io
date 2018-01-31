from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.utils import timezone
from .models import Post
from django.contrib.auth.models import User

@login_required
# Create your views here.
def create(request):
  if request.method == "POST":
    if request.POST['title'] and request.POST['url']:
      post = Post()
      post.title = request.POST['title']
      if request.POST['url'].startswith('http://') or request.POST['url'].startswith('https://'):
        post.url = request.POST['url']
      else:
        post.url = 'http://'+ request.POST['url']
      post.pub_date = timezone.datetime.now()
      post.author = request.user
      post.save()
      return redirect('home')
    else:
      return render(request, 'posts/create.html', {'error': 'You did not provide title and/or url'})
  else:
    return render(request, 'posts/create.html')


def home(request):
  posts = Post.objects.order_by("-votes_total")
  return render(request, 'posts/home.html', {'posts': posts})


def upvote(request, pk):
  if request.method == "POST":
    post = Post.objects.get(pk=pk)
    post.votes_total +=1
    post.save()
    return redirect('home')

def downvote(request, pk):
  if request.method == "POST":
    post = Post.objects.get(pk=pk)
    post.votes_total -=1
    post.save()
    return redirect('home')

def userpost(request, fk):
    userposts = Post.objects.filter(author_id=fk).order_by('-votes_total')
    author = User.objects.get(pk=fk)
    return render(request, 'posts/userpost.html', {'userposts': userposts, 'author': author})