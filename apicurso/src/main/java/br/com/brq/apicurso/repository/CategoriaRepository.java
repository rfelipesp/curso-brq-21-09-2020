package br.com.brq.apicurso.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
	
	public List<Categoria> findByNome(String nome);
	
	public List<Categoria> findByNomeContains(String nome);
}
