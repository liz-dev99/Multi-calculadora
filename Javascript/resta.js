const Operacion = require('./operacion');
class Resta extends Operacion {
    ejecutar(a, b){
        return a - b;
    }

}
module.exports = Resta;