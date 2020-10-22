package br.com.brq.apicurso.model.enums;

public enum Perfil {
	
	ADMIN(1,"ROLE_ADMIN"),
	CLIENTE(2,"ROLE_CLIENTE");
	
	private int codigo;
	private String descricao;
	
	private Perfil(int codigo, String descricao) {
		this.codigo = codigo;
		this.descricao = descricao;
	}

	public int getCodigo() {
		return codigo;
	}

	public String getDescricao() {
		return descricao;
	}
	
	public static Perfil toEnun(int codigo) {
		
		for (Perfil p : Perfil.values()) {
			if (p.getCodigo() == codigo) {
				return p;
			}
		}
		return null;
		
	}

	
	
	
	

}
