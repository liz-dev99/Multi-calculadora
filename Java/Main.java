import java.util.Map;
import java.util.HashMap;
public class Main {
    public static void main(String[] args) {
        Lector lector = new Lector();
        Impresora impresora = new Impresora();
        Map<String, Operacion> operaciones = new HashMap<>();
        operaciones.put("+", new Suma());
        operaciones.put("-", new Resta());
        operaciones.put("*", new Multiplicacion());
        operaciones.put("/", new Division());
        Calculadora calculadora = new Calculadora(operaciones);
        double numero1 = lector.leerNumero("Ingresa el primero número: ");
        double numero2 = lector.leerNumero("Ingresa el segundo número: ");
        String simbolo = lector.leerTexto("Elige una operación (+, -, *, /): ");
        String resultado = calculadora.calcular(numero1, numero2, simbolo);
        impresora.mostrar(resultado);

    }
    
}