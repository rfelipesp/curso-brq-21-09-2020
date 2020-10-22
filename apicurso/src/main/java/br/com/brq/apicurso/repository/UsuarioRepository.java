package br.com.brq.apicurso.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Usuario;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	
	public List<Usuario> findByNome(String nome);
	
	public List<Usuario> findByNomeContains(String nome);

	public Usuario findByEmail(String email);
}
