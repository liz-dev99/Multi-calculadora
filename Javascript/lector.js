const readlineSync = require ('readline-sync');
class Lector {
    leerNumero(mensaje){
        return parseFloat(readlineSync.question(mensaje))
    }
    leerTexto(mensaje){
        return (readlineSync.question(mensaje))
    }
}
module.exports = Lector;