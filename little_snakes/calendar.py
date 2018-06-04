"""
a simple program which helps you manage your social life
"""
from time import sleep
from random import randint
calendar = {};
options = ["A", "E", "D", "V", "X"];

def manage_calendar():
  manage = True
  while manage:
    print("Welcome to my calendar, choose what you want to do")
    option = input("What would you like to do? 'A' is for 'add', 'E' is for 'Edit', 'D' is for 'delete', 'V' is for 'view' and 'X' is for 'exit': ").upper();
    if option == "A":
      date = input("Write a date in DD/MM/YYYY format: ")
      entry = input("Add an event: ")
      if len(date) != 10 or len(entry)< 5:
        print("Ups, try again")
      else: 
        calendar[date] = entry
        print("Adding...")
        sleep(2)
        print(calendar)
    elif option == "D":
      if len(calendar.keys())<1:
        print("The calendar is empty")
      else:
      	event = input("Specify event to delete :")
      	for date in calendar.keys():
      	  if event == calendar[date]:
      	  	del(calendar[date])
      	  	print("Event deleted")
      	  	print("See the updated calendar:")
      	  	sleep(0.5)
      	  	print(calendar)
      	  else:
      	  	print("No such event was found")
      	  	break
    elif option =="E":
      update = input("Write a date in DD/MM/YYYY format: ")
      new_entry = input("Enter new event")
      if len(update) !=10 or len(new_entry)<5:
        print("Sorry, something is wrong, please try again")
      else:
        calendar[update] = new_entry
        print("Updating...")
        sleep(1)
        print(calendar)
    elif option =="V":
      if len(calendar.keys())<1:
        print("Nothing to view, the calendar is empty")
      else:
      	print("Wait for events upload")
        sleep(1)
        print(calendar)
    elif option == "X":
      print("Ok, bye...wait to be logged out")
      sleep(2)
      manage = False
    else:
      print("Something went wrong, you sure you entered the right option?")
      try_again = input("Do you wanna try again? 'Y' - 'yes', 'N'- 'no': ").upper
      if try_again == "Y":
        option = input("What would you like to do? 'A' is for 'add', 'E' is for 'Edit', 'D' is for 'delete', 'V' is for 'view' and 'X' is for 'exit': ").upper();
      else:
      	manage = False   
manage_calendar()

