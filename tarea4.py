valorCompra = 0
colorDeBola = " "
Descuento = 0
PrecioPagar = 0
valorDescuento = 0

valorCompraC = ""

print("escribe el valor de la compra : ")
valorCompraC = input()
valorCompra = int(valorCompra)

print("color de bolas que se pueden sacar con su rescpectivo descuento : ")
print("blanca")
print("verde")
print("amarilla")
print("azul")
print("roja")

print("Escoge cualquier color de bola y te saldra un descuento sorpresa ")

colorDeBola = input()

if colorDeBola = "blanca" or colorDeBola = "verde" or colorDeBola = "amarilla" or colorDeBola = "azul" or colorDeBola = "roja":


if colorDeBola = "blanca":
Descuento = 0


if colorDeBola = "verde":
Descuento = 10


if colorDeBola = "amarilla":
Descuento = 25


if colorDeBola = "azul":
Descuento = 50


if colorDeBola = "roja":
Descuento = 100


print("sacaste la bola de color  " + colorDeBola + " que tiene un descuento de " + Descuento


valorDescuento=(valorCompra * Descuento) / 100

print("el valor del descuento seria : " + valorDescuento)

valorApagar=valorCompra - valorDescuento
print("entonces el valor que el cliente debe pagar con el descuento es " + valorApagar)


else
(print "no ingresaste un color valido")
