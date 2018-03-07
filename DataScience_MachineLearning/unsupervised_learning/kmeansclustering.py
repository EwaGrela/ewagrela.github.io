print("This is unsupervised machine learning exercise adapted from udemy course, but done on my own")
print("We will be analyzing college data and try to cluster colleges into two groups: private and public")

import numpy as np 
import pandas as pd 
import seaborn as sns 
import matplotlib.pyplot as plt 

data = pd.read_csv("College_Data")
print(data.head())
print(data.info())
print(data.describe())
print(data.columns)

print("Creating a scatterplot of Grad.Rate versus Room.Board where the points are colored by the Private column")
sns.lmplot(x="Grad.Rate", y="Room.Board", data = data, hue="Private", sharex=True, palette="magma")
plt.show()

print("Creating a scatterplot of F.Undergrad (fulltime undergrads) versus Outstate where the points are colored by the Private column")

sns.lmplot(x= "F.Undergrad", y ="Outstate", data =data, sharex=True, hue="Private", palette="viridis")
plt.show()

print("Creating a stacked histogram showing Out of State Tuition based on the Private column")
g = sns.FacetGrid(data=data, hue="Private", palette="coolwarm")
g.map(plt.hist, "Outstate", alpha=0.6, bins=20)
plt.title("outstate tuition private vs public")
plt.legend()
plt.show()

print("Similar histogram for the Grad.Rate column: ")
g = sns.FacetGrid(data=data, hue="Private", palette="magma")
g.map(plt.hist, "Grad.Rate", alpha=0.6, bins=20)
plt.title("graduation rate by private vs public")
plt.legend()
plt.show()

print("According to histogram, one school has graduation rate higher than 100%, this needs to be found and fixed")

print(data[data["Grad.Rate"]>100])
data["Grad.Rate"]["Cazenovia College"] = 100
print("Checking if this came through")
print("It does not, gives a warning")
data[data["Grad.Rate"]]

