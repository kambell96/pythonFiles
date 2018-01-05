var number = 5
var cantd = 1;
var suma = 0;

document.write("</br>" + " encontrar la suma de los primeros cinco numeros naturales " + "</br>");

while (cantd <= number) {
	var suma = suma + cantd;
	var cantd = cantd + 1;

	document.write("</br>" + " la suma de los primeros numeros es : " + "</br>" + "</br>" + number + " es " + suma + "</br>");
}