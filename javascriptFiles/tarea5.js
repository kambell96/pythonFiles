parseInt("tenemos cuatro esferas y 3 de ellas tienen el mismo peso y una no determina el valor de las 4")

var pesoA = prompt("Peso para esfera A");

var pesoB = prompt("Peso para esfera B");

var pesoC = prompt("Peso para esfera C");

var pesoD = prompt("Peso para esfera D");



if (pesoA == pesoB && pesoA == pesoC && pesoA == pesoD);
{

	if (pesoD > pesoA && pesoD > pesoB && pesoD > pesoC) {

		document.write("D es distinta y mayor que las de mas esferas ")
	}

	else if (pesoD < pesoA && pesoD < pesoB && pesoD < pesoC) {

		document.write("D es distinta y menor que las de mas esferas ")
	}

	else if (pesoC > pesoA && pesoC > pesoB && pesoC > pesoD) {

		document.write("C es distinta y mayor que las de mas esferas ")
	}

	else if (pesoC < pesoA && pesoC < pesoB && pesoC < pesoD) {

		document.write("C es distinta y menor que las de mas esferas ")
	}

	else if (pesoB > pesoA && pesoB > pesoC && pesoB > pesoD) {
		document.write("B es distinta y mayor que las de mas esferas ")
	}

	else if (pesoB < pesoA && pesoB < pesoC && pesoB < pesoD) {
		document.write("B es distinta y menor que las de mas esferas ")
	}

	else if (pesoA > pesoB && pesoA > pesoC && pesoA > pesoD) {
		document.write("A es distinta y mayor que las de mas esferas ")
	}

	else if (pesoA < pesoB && pesoA < pesoC && pesoA < pesoD) {
		document.write("A es distinta y menor que las de mas esferas ")
	}

	else {
		document.write("las esferas son iguales")
	}

}
