
juan = 0
alberto = 0
ana = 0
mama = 0

juan = input("cual es la edad de juan? : ")
juan = int(juan)
# print(type(juan) is int)

alberto = (juan / 3) * 2
print("entonces alberto tiene : " + str(alberto))

ana = (juan / 3) * 4
print("y ana tiene : " + str(ana))

mama = juan + alberto + ana
print("entonces la edad de la mama de juan es : " + str(mama))


mensaje = input("cual es tu nombre? : ")
print(type(mensaje) is str)
print("tu nombres : " + mensaje)
