class Calculadora {
    constructor (Operaciones) {
        this.operaciones = Operaciones;
    }
    calcular(a, b, simbolo) {
        const operacion = this.operaciones[simbolo];
        if (operacion === undefined ) {
            return("No definido");
        }
    try {
        const resultado = operacion.ejecutar(a, b);
        return resultado;
    } catch (e) {
        return e.message 
    }
    }
}
module.exports = Calculadora;