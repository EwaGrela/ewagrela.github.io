a = int(input("Enter a number from 1 to 100: "))
b = int(input("Enter a number from 1 to 100: "))
if a > b:
  a,b = b,a


def fizz_buzz(n):
  if i % 5 ==0 and i % 3 ==0:
    print(i, "fizzbuzz")
  elif i % 3 ==0:
  	print( i, "fizz")
  elif i % 5 == 0:
  	print(i, "buzz")
  else:
  	print(i)
  
for i in range(a, b):
  fizz_buzz(i)