public class Division implements Operacion {
    public double ejecutar(double a, double b) {
        if (b == 0)
        throw new ArithmeticException ("Valor erroneo");
        else
        return a / b;
    }
}