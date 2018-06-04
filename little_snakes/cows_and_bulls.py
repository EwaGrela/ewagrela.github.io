"""
A program that plays the 'cows and bulls' game with the user. The game works like this:
Randomly generate a 4-digit number. The user enters a 4-digit number. 
For every digit that the user guessed correctly in the correct place, they have a 'cow'. 
For every digit the user guessed correctly in the wrong place is a 'bull'. 
Every time the user makes a guess, you tell them how many 'cows' and 'bulls' they have. 
"""
import random

computer_input = str(random.randint(1000,9999))
user_input = input("Enter a 4-digit number: ")

def play_game(user, comp):
  cows = 0
  bulls = 0
  for i, index in enumerate(user):
    print comp
    if user[i] == comp[i]:
      cows +=1
    elif user[i] in comp:
      bulls +=1 
  print("you have {}".format(cows))
  print("you have {}".format(bulls))
play_game(user_input, computer_input)