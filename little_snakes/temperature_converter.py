inp = input(" Please enter 'F' for 'Fahrenheit' or 'C' for 'Celsius'").upper()

if inp == "F":
  inp2 = int(input("Please enter temperature, so I will tell you how much is that in Celsius scale: "))
  temp_cels = round((inp2 - 32) / 1.8, 2)
  if temp_cels <=0:
  	print("This is the temperature that water freezes")
  elif 1<=temp_cels<=99:
  	print("This is the temperature that water is liquid")
  else:
  	print("This is temperature above the boiling point")
  print("{} degrees F is {} degrees Celsius".format(inp2, temp_cels))
elif inp == "C":
  inp3 = int(input("Please enter temperature, so I will tell you how much is this in Fahrenheit scale: "))
  temp_f = round((inp3 * 1.8) + 32, 2);
  print("{} degrees C is {} degrees F".format(inp3, temp_f))
  if temp_f <=32:
  	print("This is the temperature that water freezes")
  elif 33<=temp_f<=211:
  	print("This is the temperature that water is liquid")
  else:
  	print("This is temperature above the boiling point")
else:
	print("Are you sure you entered the right scale? Try again")
