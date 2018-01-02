numero1 = 0
numero2 = 0
numero3 = 0

numero1C = ""
numero2C = ""
numero3C = ""

print("escribe el valor del numero 1 : ")
numero1C = input()
numero1 = int(numero1C)

print("escribe el valor del numero 2 : ")
numero2C = input()
numero2 = int(numero2C)

#aqui es la forma mas corta de acortar el codigo
numero3 = int(input("escribe el valor de numero 3 : "))

if numero2 > numero1 and numero2 > numero3:
  print()
  print(numero2C + " seria el mayor que los tres numeros dados")


if numero1 > numero2 and numero1 > numero3:
  print()
  print(numero1C + " seria el mayor que los tres numeros dados")


if numero3 > numero1 and numero3 > numero2:
  print()
  print(str(numero3) + " seria el mayor que los tres numeros dados")
