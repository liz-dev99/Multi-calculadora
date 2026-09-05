const Operacion = require('./operacion');
class Multiplicacion extends Operacion {
    ejecutar(a, b){
        return a * b;
    }

}
module.exports = Multiplicacion;