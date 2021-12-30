package POO;

public class Carros {
	
	// construtor ="defini os valores iniciais"
	public Carros() {
		chassi = "676233ba889";
		marca = "Ferrari";
		velocidadeMaxima = 320;
	}
	
	public Carros(String c, String m, int v) {		//assinatura_diferentes_para_evitar_erro___
		chassi = c;
		marca = m;
		velocidadeMaxima = v;
	}
	

	// atributos - "caracteristicas"
	String chassi;
	String marca;
	int velocidadeMaxima;
	
	// metodos - "comportamentos"
	void buzina() {
		System.out.println("Beep Beep");
	}
	
	void roncoMotor() {			// void - não_precisa_retorna_nada
		System.out.println("Vruuuuuummmmm");
	}
	
	void aumentarVelocidade(int valorVelocidade) {
		this.velocidadeMaxima += valorVelocidade;
		System.out.println("Velocidade_nova: "+velocidadeMaxima);
	}
	
	int exibirVelocidade() {
		return velocidadeMaxima;
	}
	
	String exibirMarca () {
		return marca;
	}
}
