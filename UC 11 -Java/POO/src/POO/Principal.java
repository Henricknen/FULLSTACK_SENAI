package POO;

public class Principal {

	public static void main(String[] args) {
		
		Carro BMW = new Carro();
		
		
		System.out.println("\n Chassi"+BMW.chassi);
		System.out.println("\n Marca"+BMW.marca);
		System.out.println("\n Velocidade"+BMW.velocidadeMaxima);

		BMW.buzina();
		System.out.println("\n Velocidade_maxima"+BMW.exibirVelocidade());
		

	}

}
