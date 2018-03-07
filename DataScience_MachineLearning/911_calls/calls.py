print("This is a data analysis project")
print("I am testing my knowledge on numpy and pandas")
print("Some data visualization will be done as well")

import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt 
import seaborn as sns 


df = pd.read_csv("911.csv")
"""
Some info on the dataframe presented:
"""
print(df.columns)
print(df.head())

print("Top 5 zipcodes for 911 calls: ")

top5_zip = df["zip"].value_counts().head()
print(top5_zip)

print("top 5 townships (column name is 'twp') for 911 calls")

top5_twps = df["twp"].value_counts().head()
print(top5_twps)

print("How many unique title codes are there? ")

unique_codes = df["title"].nunique()
print(unique_codes)
print("Adding a new column, which is named 'reason' and derived from 'title' column, using lambda expression ")
print(df.columns)
df["reason"] = df["title"].apply(lambda x: x.split(":")[0])

print("Checking the dataframe now, that a column was added: ")
print(df.head())
print(df.columns)

print("Checking the most common reason to call 911 based on 'reason' column")

common_reason = df["reason"].value_counts().sort_values(ascending= False)
print(common_reason)

print("Making a countplot examining the reasons of emergencies using seaborn library")

sns.set_style("darkgrid") 
# setting the background for further plots

sns.countplot(x= "reason", palette="viridis", data =df)
plt.title("Occurence of emergencies")
plt.show() 


print("Converting the timeStamp column to the datetime from string: ")

df["timeStamp"] = pd.to_datetime(df["timeStamp"])

print("Now creating three new columns, with hour, month and day of the week there")
df["hour"] = df["timeStamp"].apply(lambda z: z.hour)
df["month"] = df["timeStamp"].apply(lambda y: y.month)
df["day_number"] = df["timeStamp"].dt.dayofweek
print("Once this is done, the problem is, we only have number of the day, whilst we also need a name")
print("Dictionaries come to our rescue")
days = {0: "Mon", 1: "Tue", 2: "Wed", 3 : "Thur", 4: "Fri", 5: "Sat", 6: "Sun"}
print(df["day_number"].head())
df["weekday"] = df["day_number"].map(days)

print("Now using seaborn to create a countplot of the weekday column with the hue based off of the Reason column. ")
print("That will let us know how diffeent days have different emergencies")
sns.set_style("whitegrid")
sns.countplot(x = "weekday", data =df, hue ="reason", palette="coolwarm")
plt.legend(bbox_to_anchor=(0.9, 1.1), loc=2)
plt.title("Emergencies on weekdays")
plt.show()

print("Same thing, but for the months")
sns.countplot(x = "month", data =df, hue ="reason", palette="magma")
plt.legend(bbox_to_anchor=(0.9, 1.1), loc=2)
plt.title("Emergencies on months")
plt.show()

print("Some of the data is missing")
print("We need to deal with it by working with pandas, using its groupby() and count() methods")

byMonth = df.groupby("month").count()
print("Create a plot indicating number of calls per month")
byMonth["reason"].plot()
plt.title("calls per month")
print("Using seaborn's lmplot() to create a linear fit on the number of calls per month: ")
sns.lmplot(x="month", y="reason", data =byMonth.reset_index())
plt.title("linear fit on the number of calls per month")
plt.show()

print("Creating a new column, called 'date'")
df["date"] = df["timeStamp"].apply(lambda x : x.date())
print(" By using groupby 'date' column with the count() aggregate we will create a plot of counts of 911 calls.")

df.groupby("date")["zip"].count().plot()
plt.title("counts of 911 calls")
plt.tight_layout()
plt.show()

print("Creating a separate plots for different reasons: ")
df[df["reason"]=="EMS"].groupby("date")["zip"].count().plot()
plt.title("EMS calls")
plt.tight_layout()
plt.show()

df[df["reason"]=="Fire"].groupby("date")["zip"].count().plot()
plt.title("Fire alarms")
plt.tight_layout()
plt.show()

df[df["reason"]=="Traffic"].groupby("date")["zip"].count().plot()
plt.title("Traffic emergencies")
plt.tight_layout()
plt.show()

print("Creating heatmaps and clustermapss: ")
print("hour heatmap")

hm = df.groupby(by =["weekday", "hour"])["reason"].count().unstack()
print(hm.head())

plt.figure(figsize= (10,7))
sns.heatmap(hm, cmap="viridis", linewidth=1)
plt.show()

print("hour clustermap")
sns.clustermap(hm, cmap ="viridis", linewidth=1)
plt.show()

print("month heatmap")
hmh = df.groupby(by =["weekday", "month"])["reason"].count().unstack()
sns.heatmap(hmh, cmap="magma", linewidth=1)
sns.clustermap(hmh, cmap="magma", linewidth=1)
plt.show()

print("Thank you for your attention")