
def counter(n):
  count = 0;
  vowels = []
  for i in "aeiou":
    for l in n.lower():
      if l==i:
        count +=1
  return count;
print("counting vowels in a string")
to_count = "Adam Moceri"

print(counter(to_count))
print("counting vowels in an input:")
inp = input("Enter Text and count vowels: ")
print(counter(inp))

print("Making a file, writing to it, adding more text, then reading from it and counting vowels in text read:")
with open("text.txt", "w") as file:
  file.write("Add random text to count vowels") 
# or write whatever you like, srsly, just practice writing to file here, everyone ;)

with open("text.txt", "a") as fil:
	fil.write("and now add even more, cause why not")

# practicing adding more txt to file

# here we are reading stuff from file:
with open("text.txt", "r") as f:
  my_text = f.read()

print(counter(my_text))

print("Finally, using BeautifulSoup to count vowels on a website!")

from bs4 import BeautifulSoup
import requests

url = "https://ewagrela.github.io/"
r = requests.get(url)
content = r.text
page = BeautifulSoup(content, "lxml")
print(type(page))
contents = page.find_all()
soup_string =""
for tag in contents:
  if tag.string is not None:
  	soup_string+=tag.string
  	
print(counter(soup_string))