var valorCompra = prompt("escribe el valor de la compra : ");

alert(" color de bolas que se pueden sacar con su rescpectivo descuento : blanca, verde, amarilla, azul, roja ");

var colorDeBola = prompt(" Escoge cualquier color de bola y te saldra un descuento sorpresa ");


if (colorDeBola == "blanca" || colorDeBola == "verde" || colorDeBola == "amarilla" || colorDeBola == "azul" || colorDeBola == "roja");
{

	if (colorDeBola == "blanca") {

		Descuento = 0
	}

	else if (colorDeBola == "verde") {

		Descuento = 10
	}

	else if (colorDeBola == "amarilla") {

		Descuento = 25
	}

	else if (colorDeBola == "azul") {

		Descuento = 50
	}

	else if (colorDeBola == "roja") {
		Descuento = 100
	}

	else {
		document.write("la bola de color ", colorDeBola, "  no es un color valido")
	}
	var valorDescuento = (valorCompra * Descuento) / 100

	var valorApagar = (valorCompra - valorDescuento)

	document.write(" sacaste la bola de color  " + colorDeBola + "  que tiene un descuento de  " + Descuento + "%")

	document.write("<br />", " el valor del descuento seria : " + valorDescuento)

	document.write("<br />", "  entonces el valor que el cliente debe pagar con el descuento es  " + valorApagar)


}




