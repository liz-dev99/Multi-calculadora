using System;
public class Division : IOperacion
{
    public double Ejecutar(double a, double b)
    {
        if (b == 0)
        {
            throw new DivideByZeroException("Error");
        }
        return a / b;
    }
}