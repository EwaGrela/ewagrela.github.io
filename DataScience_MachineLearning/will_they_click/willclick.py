import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 
import seaborn as sns

print("importing the data from external file and saving it as a dataframe")

data = pd.read_csv("advertising.csv")
print("examining the data:")
print(data.info)
print(data.describe())
print(data.head())

print("data visualization")

plt.figure(figsize=(9,9))
sns.set_style("whitegrid")
print(data.columns)

data["Age"].hist(bins = 30)
plt.title("Age distribution")
plt.xlabel("age")
plt.show()

print("Explore the relation between Area Income vs Age")
print("Make a joinplot")
sns.jointplot(x="Age", y = "Area Income", data = data)
plt.title("Age vs Area Income")
plt.show()

print("Make a hexplot of time spent on site and age")
sns.jointplot(x="Age", y="Daily Time Spent on Site", data = data, kind="scatter", color="red")
plt.show()

print("Joitplot of Daily Time Spent on Site' vs. 'Daily Internet Usage'")
sns.jointplot(x="Daily Time Spent on Site", y ="Daily Internet Usage", color ="green", data= data)
plt.show()

# print("Pairplots:")
# sns.pairplot(data, hue ="Clicked on Ad", palette="magma")
# plt.tight_layout()
# plt.show()
# commented out, because it slows performance, so will only be called once to generate plots 
print("This part of the exercise is about splitting data into testing and training set and training a model")
from sklearn.model_selection import train_test_split;
print(data.columns)
print(data.info())
x = data[["Daily Time Spent on Site", "Age", "Area Income", "Daily Internet Usage", "Male"]]
y = data["Clicked on Ad"]
x_test, x_train, y_test, y_train = train_test_split(x, y, test_size =0.3, random_state = 101)
from sklearn.linear_model import LogisticRegression
model = LogisticRegression()
model.fit(x_train, y_train)
print(model)
predictions = model.predict(x_test)

print("Checking how accurate was the model")
from sklearn.metrics import classification_report
print(classification_report(y_test, predictions))