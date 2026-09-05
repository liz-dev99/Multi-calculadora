const Calculadora = require ('./calculadora');
const Suma = require ('./suma');
const Resta = require ('./resta');
const Multiplicacion = require ('./multiplicacion');
const Division = require ('./division');
const Lector = require ('./lector');
const Impresora = require ('./impresora');
const lector = new Lector ();
const impresora = new Impresora ();
const operaciones = {
    "+" : new Suma(),
    "-" : new Resta(),
    "*" : new Multiplicacion(),
    "/" : new Division(),
};
const calculadora = new Calculadora (operaciones);
const numero1 = lector.leerNumero("Ingrese el primero número: ");
const numero2 = lector.leerNumero("Ingrese el ssegundo número: ");
const simbolo = lector.leerTexto("Ingrese una operación (+, -, *, /): ");
const resultado = calculadora.calcular (numero1, numero2, simbolo);
impresora.mostrar(resultado);