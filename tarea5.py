Definir pesoA como numerico
    Definir pesoB como numerico
    Definir pesoC como numerico
    Definir pesoD como numerico

    Escribir "tenemos cuatro esferas y 3 de ellas tienen el mismo peso y una no determina el valor de las 4"
    Escribir " "

    Escribir "Peso para esfera A"
    leer pesoA

    Escribir "Peso para esfera B"
    Leer pesoB

    Escribir "Peso para esfera C"
    Leer pesoC

    Escribir "Peso para esfera D"
    Leer pesoD
    Escribir " "

    si pesoA = pesoB y pesoA = pesoC y pesoA = pesoD Entonces
        Escribir "las esferas son iguales"

    SiNo

        si pesoA = pesoB y pesoA = pesoC Entonces
            si pesoD > pesoA y pesoD > pesoB y pesoD > pesoC Entonces
                Escribir "D es distinta y mayor que las de mas esferas "
            SiNo
                Escribir "D es distinta y menor que las de mas esferas "

            FinSi

        FinSi

        si pesoA = pesoB y pesoA = pesoD Entonces
            si pesoC > pesoA y pesoC > pesoB y pesoC > pesoD Entonces
                Escribir "C es distinta y mayor que las de mas esferas "
            SiNo
                Escribir "C es distinta y menor que las de mas esferas "
            FinSi

        FinSi

        si pesoA = pesoC y pesoA = pesoD Entonces
            si pesoB > pesoA y pesoB > pesoC y pesoB > pesoD Entonces
                Escribir "B es distinta y mayor que las de mas esferas "
            SiNo
                Escribir "B es distinta y menor que las de mas esferas "
            FinSi

        FinSi

        si pesoB = pesoC y pesoB = pesoD Entonces
            si pesoA > pesoB y pesoA > pesoC y pesoA > pesoD Entonces
                Escribir "A es distinta y mayor que las de mas esferas "
            SiNo
                Escribir "A es distinta y menor que las de mas esferas "
            FinSi

        FinSi

    FinSi
