print("In this project we will focus on analysis of data from lending money company")
print("We will try to predict whether the money borrowed will be given back")
import numpy as np 
import pandas as pd 
import seaborn as sns 
import matplotlib.pyplot as plt 

data = pd.read_csv("loan_data.csv")
print(data.head())
print(data.info())
print(data.describe())
print(data.columns)

print("Creating histograms of fico distributions")
print("by credit.policy")
plt.figure(figsize=(8,8))
data[data["credit.policy"]==1]["fico"].hist(color="red", alpha=0.6, label="credit.policy=1")
data[data["credit.policy"]==0]["fico"].hist(color="blue", alpha=0.6, label="credit.policy=0")
plt.xlabel("fico")
plt.legend()
plt.show()
print("and by not.fully.paid")

data[data["not.fully.paid"]==1]["fico"].hist(color = "yellow", alpha= 0.6, label = "not.fully.paid=1")
data[data["not.fully.paid"]==0]["fico"].hist(color = "green", alpha= 0.6, label = "not.fully.paid=0")
plt.xlabel("fico")
plt.legend()
plt.show()

print("Creating a countplot using seaborn showing the counts of loans by purpose, with the color hue defined by not.fully.paid.: ")
sns.countplot(data= data, x="purpose", hue ="not.fully.paid", palette="viridis")
plt.legend()
plt.tight_layout()
plt.xlabel("purpose")
plt.show()

print("The trend between FICO score and interest rate:")
sns.jointplot(x="fico", y="int.rate", data=data, color ="purple")
plt.show()

print("Creating lmplots to see if the trend differed between not.fully.paid and credit.policy")
sns.lmplot(x= "fico", y ="int.rate", hue="credit.policy", col="not.fully.paid", data=data )
plt.show()

print("Time to test and train a model - which will be a Random Forest Classification Model")
print("Checking the info about columns again:")
print(data.info())
print("Purpose column is categorical, we need to deal with it and transform this data using dummies:")
cat_feats = ["purpose"]
df = pd.get_dummies(data, columns = cat_feats,drop_first=True)
print(df.head())
print(df.info())

from sklearn.model_selection import train_test_split
print("We will be checking if we can predict if it will be paid back, so not.fully.paid will be our y")
y = df["not.fully.paid"]
x = df.drop("not.fully.paid", axis=1)

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.3, random_state =101)

from sklearn.tree import DecisionTreeClassifier
model = DecisionTreeClassifier()
model.fit(x_train, y_train)
print(model)

predictions = model.predict(x_test)
from sklearn.metrics import classification_report, confusion_matrix
print(classification_report(y_test, predictions))
print(confusion_matrix(y_test, predictions))

print("The same data will be fed to RandomForestClassifier")
print("RandomForestClassifier will be trained with the same data")
print("We will see with model does better")
from sklearn.ensemble import RandomForestClassifier
model2 = RandomForestClassifier()
model2.fit(x_train, y_train)
print(model2)
predictions2 = model2.predict(x_test)
print(classification_report(y_test, predictions2))
print(confusion_matrix(y_test, predictions2))

print("Based on confusion matrix and classification report, hard to tell which model does better")
print("")