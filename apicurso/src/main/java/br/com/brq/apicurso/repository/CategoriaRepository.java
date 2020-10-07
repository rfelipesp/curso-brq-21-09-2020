package br.com.brq.apicurso.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Categoria;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Integer> {
	
	public List<Categoria> findByNome(String nome);
	
	public List<Categoria> findByNomeContains(String nome);

	//@Query("SELECT c FROM Categoria c WHERE UPPER(c.nome) LIKE %?1%")
	//public Page<Categoria> findByNome(String busca, PageRequest pageRequest);
	
	public Page<Categoria> findByNomeContainsIgnoreCase(String nome, Pageable pageable);
}
