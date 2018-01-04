var number = 0
var cantd = 1;
var suma = 0;

var number = prompt(" ingrese número ");

while (cantd <= number) {
	var suma = suma + cantd;
	var cantd = cantd + 1;

	document.write(" la suma de " + number + " es " + suma);
}