// var codigo = prompt("ingresa el codigo del articulo : ");
// var valorTotalC = 0

// for (codigo > 0; codigo++;) {

// 	var Pcant = prompt("escribe la cantidad de productos que llevaras : ");
// 	var precio = prompt("escribe el precio del producto : ");

// 	var totalValorArt = Pcant * precio
// 	var valorTotalC = valorTotalC + totalValorArt


// 	document.write("codigo del producto : " + codigo + "<br>");
// 	document.write("cantidad registrada : " + Pcant + "<br>");
// 	document.write("precio del producto : " + precio + "<br>");

// 	document.write("el valor total por articulo : " + totalValorArt + "<br>");
// 	document.write("<br>")

// 	var codigo = prompt("ingresa el codigo del articulo : ");


// }

// document.write("el valor total del compra con los productos ingresados es de  :" + valorTotalC);


//nueva forma 

var array_productos = [];
var totalCompra = 0;
var codigo1 = prompt("escribe el codigo :");
// var user = prompt("bienvenido  para empezar escribe 1 ");
for (codigo1 > 0; codigo1++;) {

	var Pcant = prompt("escribe la cantidad que llevaras :");
	var precio1 = prompt("escribe el precio del producto :");

	var valorTotalArt = Pcant * precio1;

	// var user = prompt("deseas continuar?(si quieres salir escribe : 0)  ");

	var totalCompra = totalCompra + valorTotalArt;

	var articulos = {
		codigo: codigo1,
		cantidad: Pcant,
		precio: precio1,
		totalP: valorTotalArt,
		// totalC: totalCompra
	};

	array_productos.push(articulos);

	document.write("codigo : " + articulos.codigo + "<br>");
	document.write("cantidad : " + articulos.cantidad + "<br>");
	document.write("precio : " + articulos.precio + "<br>");
	document.write("el valor total por articulo  : " + articulos.totalP + "<br>");
	document.write("<br>");


	var codigo1 = prompt("escribe el codigo :");
};

document.write("</br>")

document.write("total de la compra es : " + totalCompra);