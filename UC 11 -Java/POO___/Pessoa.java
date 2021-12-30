package POO;

public class Pessoa {

	// atributos
	private String nome;
	private int idade;
	
	// construtor
	public Pessoa() {
		nome = "Luis_henrique_s_f_";
		idade = 30;
	}
	
	// get - " sempre_retona_os_valores_do_atributos
	public String getNome() {
		return this.nome;
	}
	
	public int getIdade() {
		return this.idade;
	}
	
	// set - " altera_os_valores_dos_atributos
	public void setNome(String n) {
		this.nome = n;
	}
	
	public void setIdade(int idade) {
		this.idade = idade;
	}
	
	// metodos
}
