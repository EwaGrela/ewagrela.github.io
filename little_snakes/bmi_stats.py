import numpy as np
import matplotlib.pyplot as plt 


height = float(input("Enter your height in centimetres: "))

weights = np.array([float(x) for x in input(" Enter your weight in kilograms over the past few months:").split(",")])

bmi = np.around(weights/ np.array((height/100)**2),2)
print(bmi)

plt.plot(bmi, linestyle="-.", marker="o", color="r")
plt.title("My BMI over months")
plt.xlabel("Months")
plt.ylabel("BMI")
plt.show()
plt.save()