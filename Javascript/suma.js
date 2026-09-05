const Operacion = require('./operacion');
class Suma extends Operacion {
    ejecutar(a, b){
        return a + b;
    }

}
module.exports = Suma;