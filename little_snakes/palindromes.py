print("Do you know what a palindrome is ?")
print("It is a word or a sentence that when reversed, reads the same")
print("Enter your word or sentence and check if it is a palindrome")

checked = input(" Enter a word or a sentence here: ")

def palindrome_checker(seq):
  if seq == seq[::-1]:
  	print("It is a palindrome")
  else:
  	print("nope, it is not a palindrome")


palindrome_checker(checked)