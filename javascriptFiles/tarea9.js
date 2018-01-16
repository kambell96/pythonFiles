// var num = prompt("escribe numero : ")

// if (num.match(/^-{0,1}\d+$/)) {
// 	console.log("numero entero valido");
// } else if (num.match(/^\d+\.\d+$/)) {
// 	console.log("numero valido");
// } else {
// 	console.log("numero invalido");
// }


// var num1 = prompt("escribe un numero: ")
// if (isNaN(num1)) {
//     document.write(num1 + " is not a number <br/>");
// } else {
//     document.write(num1 + " is a number <br/>");
// }

// var str1 = "mkyong"
// if (isNaN(str1)) {
//     document.write(str1 + " is not a number <br/>");
// } else {
//     document.write(str1 + " is a number <br/>");
// }

textos = " ";


while (textos !== "pepito") {

	var textos = prompt("ingresa tu nombre : ")
	// if (isNaN(textos)) {
	// 	alert("hola " + textos);
	// }
	// else {
	// 	alert(textos);
	// }


	if (textos.match(/^-{0,1}\d+$/)) {
		alert(textos);
	}
	else {
		alert("hola " + textos);
	}


}







