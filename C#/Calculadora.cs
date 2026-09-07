using System;
using System.Collections.Generic;
public class Calculadora
{
    private Dictionary<string, IOperacion> operaciones;
    public Calculadora(Dictionary<string, IOperacion> operaciones)
    {
       this.operaciones = operaciones;
    }
    public string Calcular(double a, double b, string simbolo)
    {
        if(!operaciones.ContainsKey(simbolo))
        {
            return "Operación no válida";
        }
        IOperacion operacion = operaciones[simbolo];
        try{
            double resultado = operacion.Ejecutar(a, b);
            return resultado.ToString();
            }
            catch(DivideByZeroException e)
            {
                return e.Message;
                }
                }

}
