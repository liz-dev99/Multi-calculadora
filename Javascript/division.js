const Operacion = require('./operacion');
class Division extends Operacion {
    ejecutar(a, b){
        if (b === 0)
            throw new Error ('Valor incorrecto');
        else
            return a / b;
    }

}
module.exports = Division;