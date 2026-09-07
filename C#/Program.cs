using System;
using System.Collections.Generic;
public class Program
{
    public static void Main(string[] args)
    {
        Lector lector = new Lector();
        Impresora impresora = new Impresora();
        Dictionary<string, IOperacion> operaciones = new Dictionary<string, IOperacion>();
        operaciones["+"] = new Suma();
        operaciones["-"] = new Resta();
        operaciones["*"] = new Multiplicacion();
        operaciones["/"] = new Division();
        Calculadora calculadora = new Calculadora(operaciones);
        double numero1 = lector.LeerNumero("Ingresa el primer numero: ");
        double numero2 = lector.LeerNumero("Ingresa el segundo numero: ");
        string simbolo = lector.LeerTexto("Ingresa la operacion(+, -, *, /): ");
        string resultado = calculadora.Calcular(numero1, numero2, simbolo);
        impresora.ImprimirTexto(resultado);


    }
}