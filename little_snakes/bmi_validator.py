print("This is a script that will help you determine whether or no your BMI is fine")
print("Keep in mind that if you are a professional athlete, or a weightlifter, BMI might not apply to you")
print("There are several other thing you need to take into account as well, mainly body fat percentage")
print("However, BMI is not a bad general healthy weight indicator")

weight = float(input("Enter your weight in kilograms: "))
print("Great, now it is time to ")
height = float(input("Now enter your height in centimetres: ")) / 100

bmi = round((weight / height **2), 2)
print(bmi)


def determine_bmi(b):
  if 18<=b<=24.99:
  	print("congrats, seems you are fine")
  elif 25.00<=b<=29.99:
  	print("Seems you are overweight, try to cut down on fats and sugars, eat plenty of fiber")
  elif 30.00<=b<=34.99:
  	print("You are obese, consider visiting dietician or a physician to avoid wieght relates health issues")
  elif 35.00<=b<=40.00:
  	print("This is serious, get help from your doctor.")
  elif 17.00<=b<=17.99:
  	print("You are slightly underweight, you might want to consider some healthy food to help you actually GAIN weight")
  elif 16.00<=b<=16.99:
  	print("This shows you are underweight and might be undernourished")
  elif 15.00<=b<=15.99:
  	print("This means you are seriously underweight and may suffer from consequences of malnourishment")
  elif b<14.99:
  	print("You are severely underweight and need medical advice")
  else:
  	print("The state you are in is called 'morbid obesity' and might end up fatally. Seek help.")


determine_bmi(bmi)
