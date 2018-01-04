var CantEscritorios = 0;
var descuento = 0;
var totalPagar = (valorCompra - descuento);
var valorCompra = (valorEscri * CantEscritorios);
var valorEscri = 500;


var CantEscritorios = prompt("ingresa el numero de escritorios que deseas comprar sabiendo que el valor de cada escritorio es de :", valorEscri);

if (CantEscritorios < 5) {
	descuento = (valorCompra * 10) / 100
}

if (CantEscritorios < 10); {
	descuento = (valorCompra * 20) / 100
}

if (CantEscritorios >= 10) {
	descuento = (valorCompra * 40) / 100
}

parseInt("el cliente ah comprado : ", CantEscritorios, " su valor total a pagar con el descuento es de  : ", totalPagar);