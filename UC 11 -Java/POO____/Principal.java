package POO;

public class Principal {

	public static void main(String[] args) {

		PessoaFisica p1 = new PessoaFisica();
		PessoaJuridica p2 = new PessoaJuridica();
		
		p1.setNome("L.H.S.F.");
		p1.setCpf(00000000000);
		
		
		p2.setNome("Profissional_de_TI");
		p2.getCnpj(99999999999);
		
		System.out.println("Nome: "+ p1.getNome() + "Cpf: "+ p1.getCpf());

		System.out.println("Empresa: "+ p2.getNome() + "Cnpf: "+ p2.getCnpj());

		
	}

}
