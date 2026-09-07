using System;
public class Lector
{
    public double LeerNumero(string mensaje)
    {
        Console.Write(mensaje);
        return Convert.ToDouble(Console.ReadLine());
    }
    public string LeerTexto(string mensaje)
    {
          Console.Write(mensaje);
          return Console.ReadLine();
    }
  
}