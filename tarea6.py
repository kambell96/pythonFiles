definir CantEscritorios como numerico
    Definir descuento como numerico
    Definir totalPagar como numerico
    Definir valorCompra como numerico
    Definir valorEscri como numerico

    valorEscri < - 500
    escribir "ingresa el numero de escritorios que deseas comprar sabiendo que el valor de cada escritorio es de :", valorEscri
    escribir " "

    leer CantEscritorios

    valorCompra < - valorEscri * CantEscritorios

    si CantEscritorios < 5  Entonces
        descuento = (valorCompra * 10) / 100
    FinSi

    si  CantEscritorios < 10  Entonces
        descuento = (valorCompra * 20) / 100
    FinSi

    si CantEscritorios >= 10  Entonces
        descuento = (valorCompra * 40) / 100
    finsi

    totalPagar = (valorCompra - descuento)

    Escribir "el cliente ah comprado : ", CantEscritorios, " su valor total a pagar con el descuento es de  : ", totalPagar
