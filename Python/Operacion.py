from abc import ABC, abstractmethod 

class Operacion(ABC):
    @abstractmethod
    #Interface segregation (contrato especifico)
    def ejecutar(self, a, b):
        pass