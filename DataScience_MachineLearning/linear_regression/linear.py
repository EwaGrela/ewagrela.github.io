print("An exercise about linearl regression, adapted from Udemy data science bootcamp")
print("The goal of the exercise is to analize data and decide whether mobile app or website is better")

import numpy as np 
import pandas as pd 
import seaborn as sns 
import matplotlib.pyplot as plt 


data = pd.read_csv("Ecommerce Customers")
print("Checking if the file loaded and taking a first look at the data")
print(data.head())
print(data.info())
print(data.describe())
print(data.columns)

print("Using seaborn to create a jointplot to compare the Time on Website and Yearly Amount Spent columns:")
sns.set_style("whitegrid")
sns.jointplot(x="Time on Website", y="Yearly Amount Spent", data = data, color = "green")
plt.show()

print("Same thing, but with Time on App: ")
sns.jointplot(x ="Time on App", y ="Yearly Amount Spent", data = data, color = "violet")
plt.show()

print("Using jointplots to create a 2D hex bin plot comparing Time on App and Length of Membership:.")
sns.jointplot(x="Time on App", y = "Length of Membership", data = data, color = "orange", kind= "hex")
plt.show()

print("This will be a pairplot, all columns included")
print("Will be commented out, once create, so that you do not create it each time you run the programm, as it slows performance")
# sns.pairplot(data)
# plt.show()
print("Seems that Yearly Amount Spent and Lenght of Membership correlate the most")

print("Creating a linear model plot (using seaborn's lmplot) of Yearly Amount Spent vs. Length of Membership")
sns.lmplot(x= "Yearly Amount Spent", y ="Length of Membership", data = data)
plt.show()

print("Splitting the data into test and train set and training model")
y = data["Yearly Amount Spent"]
x = data[["Avg. Session Length", "Time on App", "Time on Website", "Length of Membership"]]
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
x_train, x_test, y_train, y_test = train_test_split(x, y, test_size = 0.3, random_state=101)
model = LinearRegression()
model.fit(x_train, y_train)
print(model)

predictions = model.predict(x_test)
print("Once model is trained and predictions are made, it is time to check how accurate they were: ")

print("Finally, a plot showing how accurate the predictions were: ")
plt.scatter(predictions, y_test)
plt.title("predictions vs real")
plt.xlabel("y_predictions")
plt.ylabel("y_test")
plt.show()

print("More calculations and a distplot showing differences between predictions and reality")
from sklearn import metrics
print("MAE: ", metrics.mean_absolute_error(y_test, predictions))
print("MSE: ", metrics.mean_squared_error(y_test, predictions))
print( "RMSE:", np.sqrt(metrics.mean_squared_error(y_test, predictions)))

print("Final plot showing residuals:  ")

plt.hist((y_test-predictions))
plt.title("residuals")
plt.show()

print("Creating a dataframe to analyze the results: ")
coeficients = pd.DataFrame(model.coef_, x.columns)
coeficients.columns = ["Coeficients"]
print(coeficients)