import random;
from time import sleep;


human = {
	"H": "heads",
	"T": "tails"
}

computer = {
	0: "heads",
	1: "tails"
}


while True:
  inp = input("Enter 'H' for 'heads' or 'T' for 'tails'. To quit, please enter 'Q' ").upper()
  if inp == "Q":
    print("Thanks for playing! Buh-bye!")
    break;
  if inp not in ("H", "T"):
    print("Try again, you put in a wrong key. Make sure it is 'H' or 'T'")
  else:
    comp_res = computer[random.randint(0,1)]
    hum_res = human.get(inp)
    sleep(1)
    print("You chose {} and the computer chose {}".format(hum_res, comp_res))
    if comp_res == hum_res:
      print("Nice. Let's play again")
    else:
      print("Uh-uh. Wanna play again?")

  
