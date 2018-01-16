var NumEst = prompt("escribe el numero de estudiantes : ");
var codigo = 0;
var contador = 0;


while (contador < NumEst) {

	var contador = contador + 1

	var codigo = prompt("escriba su correspondiente codigo : ");

	var nMat1 = prompt("escriba la nota de la materia 1 : ");

	var nCre1 = prompt("escriba el numero de creditos de la materia 1 : ");

	var nMat2 = prompt("escriba la nota de la materia 2 : ");

	var nCre2 = prompt("escriba el numero de creditos de la materia 2 : ");

	var nMat3 = prompt("escriba la nota de la materia 3 : ");

	var nCre3 = prompt("escriba el numero de creditos de la materia 3 : ");

	var nMat4 = prompt("escriba la nota de la materia 4 : ");

	var nCre4 = prompt("escriba el numero de creditos de la materia 4 : ");

	var Numcs = parseFloat(nCre1 + nCre2 + nCre3 + nCre4).toFixed();
	var Notas = parseFloat(nCre1 * nMat1) + (nCre2 * nMat2) + (nCre3 * nMat3) + (nCre4 * nMat4);
	var promedioCr = parseFloat(Notas / Numcs).toFixed(2);
	var codigo = parseFloat(codigo);


	document.write("el estudiante con el codigo " + codigo + "</br>");

	document.write("curso con  un numero de creditos que son : " + Numcs + "</br>");

	document.write("y su promedio total fue de : " + promedioCr + "</br>");
	document.write("</br>");




}

console.log(typeof (codigo))
console.log(typeof (Numcs))
console.log(typeof (promedioCr))
