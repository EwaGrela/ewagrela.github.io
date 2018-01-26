from time import sleep
print("This is a word counter")
sleep(0.5)
print("A little script that count word in the sentence you feed to it")
sleep(0.5)
print("Come try it out!")
sleep(0.5)
inp = input("Your sentence goes here: ").split(" ")
print("Wait, it is counting...")
sleep(1)
def word_count(seq):
  wc = 0
  for s in seq:
  	if s[:-1].isalpha() or s.isalpha():
  		wc +=1
  return wc

print("There are {} words in your sentence".format(word_count(inp)))