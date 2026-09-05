#Dependency inversion
#solo cumple
class Calculadora:
    def __init__(self, operaciones):
        self.operaciones = operaciones
#Open/closed 
    def calcular(self, a, b, simbolo):
        operacion = self.operaciones.get(simbolo)
        if operacion is None:
            return "Operacion no válida"
        try:
        #liskov substitution
            return operacion.ejecutar(a, b)
        except ValueError as e:
            return str(e)