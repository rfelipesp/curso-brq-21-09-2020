package br.com.brq.apicurso.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.model.Endereco;

@Repository
public interface EnderecoRepository extends JpaRepository<Endereco, Integer> {
	
	public List<Endereco> findByLogradouro(String logradouro);
	
	public List<Endereco> findByLogradouroContains(String logradouro);
	
	public Page<Endereco> findByLogradouroContainsIgnoreCase(String logradouro, Pageable pageable);

}
