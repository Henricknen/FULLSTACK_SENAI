
public class PessoaJuridica extends Pessoa{		// extends - comando_recebe_heran�a_da_classse_pai

	private int cnpj;
	
	protected int getCnpj() {
		return cnpj;
	}
	
	protected void setCnpj(int cnpj) {
		this.cnpj = cnpj;
	}
}
