from time import sleep

print("Calculate your love score")
name1 = input(" Enter your name: ")
sleep(1)
name2 = input(" Enter your bae's name: ")
sleep(1)
print("Your name is {} and your bae's name is {}".format(name1, name2))

def count_vowels(n):
  count = 0;
  for i in n.lower():
  	if i in "aeiou":
  	  count +=1
  return count

def count_consonants(n):
  count = 0;
  for i in n.lower():
  	if i not in "aeiou":
  	  count +=1
  return count

def compute_love(n1, n2):
  points = 0;
  if n1[0] == n2[0]:
    points +=20
  if n1[0] and n2[0] in "aeiou":
  	points +=10
  if n1[0] and n2[0] not in "aeiou":
  	points +=5
  if count_consonants(n1) ==count_consonants(n2):
  	points +=12
  if count_vowels(n1) == count_vowels(n2):
  	points +=12
  if ("v" in n1 and "v" in n2) or ("l" in n1 and "l" in n2 ) or ("e" in n1 and "e" in n2):
    points +=7
  return points;

result = compute_love(name1, name2)

def interpret_res(res):
  if 0<=res <=20:
  	print("Nope. Na-ah. Niet. Nada. Niente. Just give up already")
  elif 21<=res<=50:
  	print("Oh dear, seems this is not exactly a match made in heaven")
  elif 51<=res<75:
  	print("It might be a bumpy ride, but give it a try, because it seems worth it")
  else:
  	print("You are the jelly to your loved one's peanutbutter! Just get married already!")

interpret_res(result)



