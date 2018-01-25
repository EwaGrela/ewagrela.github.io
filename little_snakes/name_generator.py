import random;

first_names = sorted("Anna,Barbara,Adam,Boleslaw,Bill,Celina,Czarek,Dominik,Daria,Ewa,Edward,Franciszek,Faustyna,Marian,Maciej,Dorian,Tomasz,Lukasz,Lucja,Milosz,Piotr,Pawel,Paulina,Karolina,Katarzyna".split(","))
last_names = sorted("Nowak,Kowalski,Duda,Grela,Wrobel,Nowaczek,Kowalczyk,Zawada,Zadroga,Lubicz,Olejnik,Daniec,Hajduk,Borejko,Bitner,Stryba".split(","))
print("The name you sorted is {} {}".format(first_names[random.randint(0, (len(first_names)-1))], last_names[random.randint(0, (len(last_names)-1))]))