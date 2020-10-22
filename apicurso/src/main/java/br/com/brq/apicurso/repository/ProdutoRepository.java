package br.com.brq.apicurso.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer> {
	
	public List<Produto> findByNome(String nome);
	
	public Page<Produto> findByNomeContainsIgnoreCase(String nome, Pageable pageable);
	
	public Page<Produto> findByCategoriaNomeContainsIgnoreCase(String nome, Pageable pageable);

}
