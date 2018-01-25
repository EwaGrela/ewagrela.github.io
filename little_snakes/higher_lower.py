import random as rd
from time import sleep
print("Hello, in this little game you will be asked to guess a number which computer drew. Find out if you can outsmart the machine!")
while True:
  inp = input("Enter a random number from 1 to 100 or 'Q' to quit ").upper()
  if inp == "Q":
    break;
  else:
  	inp = int(inp)
  	if 1<=inp <=100:
  	  comp = rd.randint(1, 100);
  	  sleep(1)
  	  print("you chose {} and computer chose {}".format(inp, comp))
  	  print("The difference between those two numbers is {}".format(abs(inp-comp)))
  	  print("Therefore the results is:")
  	  sleep(1)
  	  if inp == comp:
  	  	print("Congrats, you guessed the number")
  	  elif abs(inp-comp)<=25:
  	  	print("You were fairly close")
  	  elif abs(inp-comp)<=50:
  	  	print("So close yet so far...")
  	  else:
  	  	print("We totally missed each other!")
  	else:
  	  print("sorry, try entering the right number")
  	  if inp >100:
  	  	print("Enter a number no bigger than 100")
  	  else:
  	  	print("Enter a number no smaller than 1")
