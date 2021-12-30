package POO;

public class Carro {
	
	// atributos "caracteristicas"
	String chassi = " 3368bs88";
	String marca = " BMw";
	int velocidadeMaxima =  300;
	
	// metodos "comportamento"
	void buzina() {
		System.out.println(" Beep Beep");
	}
	
	int exibirVelocidade() {
		return velocidadeMaxima;
	}

}
