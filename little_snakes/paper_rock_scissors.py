import random
from time import sleep

hum = {
	"R": "rock",
	"P": "paper",
	"S": "scissors"
}

comp = {
	0 : "rock",
	1 : "paper",
	2: "scissors"
}

print("Welcome to the 'rock-paper-scissors' game")
sleep(1)
rounds = int(input("Please enter a number of rounds you want to play: "))
ties = 0;
wins = 0;
loses = 0;
while rounds>0:
  r = rounds
  inp = input(" Enter 'R' for rock, 'P' for paper, 'S' for scissors: ").upper()
  if inp not in hum.keys():
  	print("Hey, you entered a wrong key!")
  else:
    c = comp[random.randint(0,2)]
    h = hum.get(inp)
    sleep(1)
    print( "Computer chose {} while you chose {}".format(c, h))
    if c == h:
      ties +=1
      rounds -=1
      print("It's a tie")
    else:
  	  if c == "paper":
  	    if h =="scissors":
  	  	  print("You win")
  	  	  wins +=1
  	  	  rounds -=1
  	    else:
  	  	  print("Computer wins")
  	  	  loses +=1
  	  	  rounds -=1
  	  elif c == "rock":
  	    if h =="paper":
  	  	  print("You win")
  	  	  wins +=1
  	  	  rounds -=1
  	    else:
  	  	  print("Computer wins")
  	  	  loses +=1
  	  	  rounds -=1
  	  elif c =="scissors":
  	    if h =="paper":
  	  	  print("Computer wins")
  	  	  loses +=1
  	  	  rounds -=1
  	    else:
  	  	  print("You win")
  	  	  wins+=1
  	  	  rounds -=1
  	  else:
  	    print("Ups, wrong input ")

if rounds ==0:
  print("The final results are: you won {} times,  tied {} times, and lost {} times".format(wins, loses, ties))


