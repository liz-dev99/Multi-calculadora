from impresora import Impresora
from lector import Lector
from suma import Suma
from resta import Resta
from multiplicacion import Multiplicacion
from Operacion import Operacion
from Calculadora import Calculadora
from division import Division

lector = Lector()
impresora = Impresora()
operaciones = {
    "+": Suma(),
    "-": Resta(),
    "*": Multiplicacion(),
    "/": Division()
}
calculadora = Calculadora(operaciones)
numero1 = lector.lector_numero("Ingresa el primer numero: ")
numero2 = lector.lector_numero("Ingresa el segundo numero: ")
simbolo = lector.lector_texto("Elige una operación +, -, * o /: ")
resultado =  calculadora.calcular(numero1, numero2, simbolo)
impresora.mostrar(resultado)