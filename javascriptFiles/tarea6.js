var CantEscritorios = 0;
var descuento = 0;
var valorEscri = 800000;
var porcentajeD = "";

var CantEscritorios = prompt("ingresa el numero de escritorios que deseas comprar sabiendo que el valor de cada escritorio es de : " + valorEscri);

var valorCompra = (valorEscri * CantEscritorios);

if (CantEscritorios < 5) {
	descuento = (valorCompra * 10) / 100
	porcentajeD = "el descuento es de 10%"
}

if (CantEscritorios < 10); {
	descuento = (valorCompra * 20) / 100
	porcentajeD = "el descuento es de 20%"
}

if (CantEscritorios >= 10) {
	descuento = (valorCompra * 40) / 100
	porcentajeD = "el descuento es de 40%"
}

var totalPagar = (valorCompra - descuento);

document.write("</br>" + "el valor del descuento sobre la compra es de : " + descuento);

document.write("</br>" + porcentajeD);

document.write("</br>" + "el cliente ah comprado : " + CantEscritorios + " unidades" + " su valor total a pagar con el descuento es de  : " + totalPagar);