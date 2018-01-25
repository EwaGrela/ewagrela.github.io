print("Welcome to the piglatin translator")
print("It translates all you want into PigLatin!")
print("Give it a go!")


sequence = input(" Enter a word or a sentence, do not add any dots or commas!").split(" ")
print(sequence)
vowels = "aeiou"
consonants = "bcdfghijklmnpqrstvwxyz"

def converter(seq):
  seq2 =[]
  for s in seq:
    if s[0] in vowels:
    	s = s + "yay"
    else:
      if s[0] in consonants and s[1] in consonants and s[2] in consonants:
      	s = s[3:] + s[0:3]+ "ay"
      	
      elif s[0] in consonants and s[1] in consonants:
        s = s[2:] + s[0:2] + "ay"
        
      else:
      	s = s[1:] + s[0] + "ay"
    seq2.append(s)
  return " ".join(seq2)

print(converter(sequence))

