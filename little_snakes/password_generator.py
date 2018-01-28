
from string import punctuation, ascii_lowercase, ascii_uppercase
import random

upper = list(ascii_uppercase)
lower = list(ascii_lowercase)
special = list(punctuation) + list("1234567890")
all_set = list(frozenset(upper+ lower+ special))

"""
Password generator:
generating a password - a user decides if they want a weak or a strong one;
weak one has to be at least 6 characters long and have at least one special character OR capital letter 
strong one - 8 characters long, has 2 special characters and one capital letter
"""
print("This is a password generator")
print("It generates passwords")
print("It is up to you to decide, if you want the password to be weak or strong")

def generate():
  pas = [];
  rand1 = random.randint(7,15)
  rand2 = random.randint(9,20)
  sp = 0;
  up = 0;
  while True:
    dec = input("Please determine strength of your password, write 'W' or 'S' (weak or strong): ").upper()

    if dec =="W":
      for i in range(0, rand1):
        pas.append(all_set[i])
      pas = "".join(pas)
      print(pas)
      for p in pas:
        if p in special:
          sp +=1
        if p in upper:
      	  up +=1
      print("password: {}, uppercase: {}, specials: {}".format(pas, up, sp))
      if up >=1 or sp>=1:
        print("Your generated password is {} ".format(pas))
        break
      else:
        print("Try again, the password is too weak")
      
    elif dec == 'S':
  	  for i in range(0, rand2):
  	    pas.append(all_set[i])
  	  pas = "".join(pas)
  	  for p in pas:
  	    if p in special:
  	  	  sp +=1
  	    if p in upper:
  	  	  up +=1
  	  print("password: {}, uppercase: {}, specials: {}".format(pas, up, sp))
  	  if sp >=2 and up >=1:
  	    print("Your generated password is {} ".format(pas))
  	    break
  	  else:
  	    print("Try again, the password is too weak")
    else:
      print("Are you sure you entered 'W' or 'S'? ")


generate()