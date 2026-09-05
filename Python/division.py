from operacion import Operacion

class Division(Operacion):
    def ejecutar(self, a, b):
        if b == 0:
            raise ValueError("Error: no es posible dividir por 0")
        else:
            return a / b