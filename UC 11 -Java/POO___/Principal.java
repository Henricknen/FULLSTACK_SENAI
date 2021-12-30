package POO;

public class Principal {

	public static void main(String[] args) {

		Pessoa p1 = new Pessoa();
		Pessoa p2 = new Pessoa();
		
		System.out.println("GET");
		System.out.println("Nome: "+p1.getNome());
		System.out.println("Idade: "+p1.getIdade());
		
		
		p2.setNome("Java_python_php_angular_bootstrap_html_css_javascript");
		
		System.out.println("SET");
		p1.setNome("Programador_fullstack");
		p1.setIdade(30);
		
		System.out.println("Nome: "+p1.getNome()
							+"\n Idade: "+p1.getIdade());
		
		System.out.println(" Habilidades");
		System.out.println("Nome: "+p2.getNome());
		
	}

}
