print("This is an exercise adopted from Udemy bootcamp")
print("We will try to determine how many stars will a review get based on the CONTENT of the review")
print("All in all, this is a basic Natural Language Processing Exercise")

print("First, we import libraries and the data, put it into dataframe and analyze the data")

import numpy as np 
import pandas as pd 
import seaborn as sns 
import matplotlib.pyplot as plt 

data = pd.read_csv("yelp.csv")
print(data.info())
print(data.head())
print(data.columns)
print("Creating a column with length of review")
data["text_length"] = data["text"].apply(lambda x : len(x))
print("Checking if all went down all right:")
print(data.columns)
print(len(data["text"].iloc[0]))
print(data["text_length"].iloc[0])
print(type(data["text_length"].iloc[0]))
print(data[["text", "text_length"]].head())
print("Seems right")
print("Visualizing data")
print("Use FacetGrid from the seaborn library to create a grid of 5 histograms of text length based off of the star ratings.")
sns.set_style("whitegrid")
g = sns.FacetGrid(data, col = "stars")
g.map(plt.hist, "text_length", bins=20, color ="g")
plt.show()

print("Creating boxplots of text length for each star category")
sns.boxplot(x = "stars", y = "text_length", data =data, palette= "viridis")
plt.show()

print("Creating a countplot of the number of occurrences for each type of star rating.")
plt.title("Occurences of ratings:")
sns.countplot(x="stars", data = data)
plt.show()

print("Checking the correlations")
stars = data.groupby("stars").mean()
print(stars.head())
cors = stars.corr()

print(cors.head())
sns.heatmap(data=cors, cmap= "viridis", linewidth=1, annot=True)
plt.show()
print("NLP classification task")
print("New dataframe will only contain columns with 1 star and 5 stars")

df = data[(data["stars"]==5) | (data["stars"]==1)]

print("Preparing the data for language processing")
x = df["text"]
y = df["stars"]

from sklearn.feature_extraction.text import CountVectorizer
cv = CountVectorizer()
print(cv)
x = cv.fit_transform(x)

from sklearn.model_selection import train_test_split
x_train, x_test, y_train, y_test = train_test_split(x,y, test_size= 0.3, random_state=101)

print("Time to import a model and train it")

from sklearn.naive_bayes import MultinomialNB

model = MultinomialNB()
model.fit(x_train, y_train)
print("model is: ", model)

print("Predicting results: ")
preds = model.predict(x_test)

from sklearn.metrics import confusion_matrix, classification_report


print("Using text processing")
from sklearn.feature_extraction.text import TfidfTransformer
from sklearn.pipeline import Pipeline

pipeline = Pipeline([
    ('bow', CountVectorizer()),  
    ('tfidf', TfidfTransformer()), 
    ('classifier', MultinomialNB()), 
])

print("Since previously you vectorized data, you need to declare them again before feeding them to pipeline; you need text!")
x = df["text"]
y = df["stars"]
x_train, x_test, y_train, y_test = train_test_split(x,y, test_size=0.3, random_state=101)

print("Fitting the pipeline with split data")
pipeline.fit(x_train, y_train)
preds2 = pipeline.predict(x_test)
print("Comparing the accuracy of two models: ")
print(classification_report(y_test,preds))
print(classification_report(y_test,preds2))