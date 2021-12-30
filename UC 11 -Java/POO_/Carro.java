package POO;

public class Carro {
	
	// atributos "caracteristicas"
	String chassi = " 3368bs88";
	String marca = " BMw";
	int velocidadeMaxima = 300;
	
	// metodos "comportamento"
	void buzina() {
		System.out.println(" Beep Beep");
	}
	
	void roncoMotor() {
		System.out.println("Vruuuummm");
	}
	
	void aumnetarVelocidade( int valorVelocidade) {
		this.velocidadeMaxima += valorVelocidade;
		System.out.println("Nova velocidade " + velocidadeMaxima);
	}
	
	int exibirVelocidade() {
		return velocidadeMaxima;
	}
	
	String exibirMarca() {
		return marca;
	}

}
