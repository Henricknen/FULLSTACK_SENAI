package POO;

public class Principal {

	public static void main(String[] args) {
		
		Carro BMW = new Carro();
		
		
		BMW.buzina();
		BMW.roncoMotor();
		BMW.aumnetarVelocidade(100);
		System.out.println("\n Velocidade_maxima "+BMW.exibirVelocidade());
		

	}

}
