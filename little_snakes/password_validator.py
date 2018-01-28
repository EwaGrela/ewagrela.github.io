from string import punctuation, ascii_lowercase, ascii_uppercase

specials = list(punctuation) + list("1234567890")
lowers = list(ascii_lowercase)
uppers = list(ascii_uppercase)
"""
Password validator:
checking a password - a user decides if they want a weak or a strong one;
weak one has to be at least 6 characters long and have at least one special character OR capital letter 
strong one - 8 characters long, has 2 special characters and one capital letter
"""

choice = input("Make a password. Choose 'W' if you want a regular one or 'S' if you want to make a strong one: ").upper()

def weak_validator(pwd):
  up = 0
  sp = 0
  for p in pwd:
  	if p in specials:
  	  sp +=1
  	if p in uppers:
  	  up +=1
  if len(pwd) >=6:
    if up >=1 or sp >=1:
      return True
    else:
      return False
  else:
  	return False
 
def strong_validator(pwd):
  up = 0
  sp = 0
  for p in pwd:
    if p in specials:
      up +=1
    if p in uppers:
      sp +=1
  if len(pwd)>=8:
  	if up >=1 and sp >=1:
  	  return True
  else:
    return False
  





def password_checker(x):
  if x == 'W':
    pwd_w = input("Generate a password. It must be at least 6 chars. long and have at least one special char OR letter in uppercase: ")
    fine = weak_validator(pwd_w)
    if fine:
      print("Congrats, your new password is set")
      
    else:
      print("Try picking a better password")
  elif x == 'S':
  	pwd_s = input("Generate a password. It must be at least 8 chars. long and have at least one special char and one letter in uppercase: ")
  	good = strong_validator(pwd_s)
  	if good:
  	  print("This is one good password! Congrats!")
  	else:
  	  print("This password needs to be stronger")
  else:
    print("Seems you have to run the program again, your input is somewhat off")


password_checker(choice)


