package POO;

public class Principal {

	public static void main(String[] args) {

		Carros ferrari = new Carros();
		Carros nissan = new Carros("254545cvd46","nissan_GTX", 300);
		
		System.out.println("Ferrari");
		System.out.println("Chassi: "+ferrari.chassi);
		System.out.println("Marca: "+ferrari.marca);
		System.out.println("velMax: "+ferrari.velocidadeMaxima);

		
		System.out.println("Nissan");
		System.out.println("Chassi: "+nissan.chassi);
		System.out.println("Marca: "+nissan.marca);
		System.out.println("velMax: "+nissan.velocidadeMaxima);

	}

}
