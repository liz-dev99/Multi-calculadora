import java.util.Map;
public class Calculadora {
    private Map<String, Operacion> operaciones;
    public Calculadora(Map<String, Operacion> operaciones){
        this.operaciones = operaciones;
    }
public String calcular(double a, double b, String simbolo) {
    Operacion operacion = operaciones.get(simbolo);
    if (operacion == null) {
        return "Operacion no valida";
    }

    try {
        double resultado = operacion.ejecutar(a, b);
        return String.valueOf(resultado);
    } catch (ArithmeticException e) {
        return e.getMessage();
    }
}
