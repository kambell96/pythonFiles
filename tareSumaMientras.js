var number = 0
var cantd = 1;
var suma = 0;

var number = prompt(+ "</br>" + " ingrese número " + "</br>");

while (cantd <= number) {
	var suma = suma + cantd;
	var cantd = cantd + 1;

	document.write("</br>" + " la suma de " + "</br>" + "</br>" + number + " es " + suma + "</br>");
}