var NumEst = prompt("escribe el numero de estudiantes : ");

var contador = 0;

while (contador < NumEst) {
	var contador = contador + 1

	var codigo = prompt("escriba su correspondiente codigo : ");

	var nMat1 = prompt("escriba la nota de la materia 1 : ");

	var nCre1 = prompt("escriba el numero de creditos de la materia 1 : ");

	var nMat2 = prompt("escriba la nota de la materia 2 : ");

	var nCre2 = prompt("escriba el numero de creditos de la materia 2 : ");

	var Numcs = (nCre1 + nCre2);
	var Notas = (nCre1 * nMat1 + nCre2 + nMat2);
	var promedioCr = Notas / Numcs

	document.write("el estudiante con el codigo " + codigo + "</br>");

	document.write("curso un numero de creditos que son : " + Numcs + "</br>");

	document.write("y su promedio fue de : " + promedioCr + "</br>");
	document.write("</br>");

}

