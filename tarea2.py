# hacer un algoritmo que, dados dos valores numericos a y b, escriba un mensaje diciendo si a es mayor, menor o igual a b.
a = 0
b = 0

aCadena = ""
bCadena = ""

print(" escribe el valor de a : ")
#se pide el valor de la variable para (a)
#input me devuelve un valor como cadena ejem : "4" "pepito"
aCadena = input()
# se convierte a entero
a = int(aCadena)

#estoy impriendo un mensaje para ingresar un valor para (b)
print(" escribe el valor de b : ")
# leo el valor que se le asigne a (b)
bCadena = input()
# se convierte la cadena en entero
b = int(bCadena)

#estoy comprando el valor asignado de a si es mayor que b

if a > b:
  #se imprime  si es a es mayor que b
  print()
  print( aCadena + " es mayor que " + bCadena)

if a < b :
  print()
  print( aCadena + " seria menor que " + bCadena)

if a == b :
  print()
  print(str(a) + " seria igual que " + str(b))
