# la clase lector representa el principio Single responsability
#Solo lee lo que entra por medio del teclado
class Lector:
    def lector_numero(self, mensaje):
       return float(input(mensaje))
       
    def lector_texto(self, mensaje):
        return input(mensaje)