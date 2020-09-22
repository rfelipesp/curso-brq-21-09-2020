package br.com.brq.apicurso.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer> {
	
	public List<Aluno> findByNome(String nome);
	
	public List<Aluno> findByNomeContains(String nome);
}
