from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Post(models.Model):
  title = models.CharField(max_length=200)
  url = models.TextField()
  pub_date = models.DateTimeField()
  author = models.ForeignKey(User, on_delete = models.DO_NOTHING)
  votes_total = models.IntegerField(default =0)
  def published_pretty(self):
  	return self.pub_date.strftime("%b %e %Y")
