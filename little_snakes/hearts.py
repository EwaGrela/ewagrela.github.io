"""
find those images which have more than 150 hearts
"""
import requests
from bs4 import BeautifulSoup

url = "https://dribbble.com/"
r = requests.get(url)
content = r.text

soup = BeautifulSoup(content, "lxml")


images = soup.find_all("div", {"class":"dribbble-shot"})

filtered = [image.find("img") for image in images if int(image.find("li", {"class": "fav"}).find("a").text)>150]
print(filtered, 
    len(filtered))
