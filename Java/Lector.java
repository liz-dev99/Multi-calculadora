import java.util.Scanner;
public class Lector {
    Scanner sc = new Scanner(System.in);
   public double leerNumero(String mensaje){
    System.out.print(mensaje);
    return(sc.nextDouble());
   }
   public String leerTexto(String mensaje){
    System.out.print(mensaje);
    return (sc.next());
   }
}