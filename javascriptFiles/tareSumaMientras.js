var number = 0
var cantd = 0;
var suma = 0;

var number = prompt(" ingrese número ");

while (cantd < number) {
	var suma = suma + cantd;
	var cantd = cantd + 1;
	document.write("</br>" + "el ciclo de cantd es :  " + cantd);

}
document.write("</br>" + " la suma del numero ingresado que es : " + number + " " + "es : " + " " + suma); 