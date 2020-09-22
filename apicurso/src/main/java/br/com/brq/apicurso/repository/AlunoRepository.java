package br.com.brq.apicurso.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.brq.apicurso.model.Aluno;

@Repository
public interface AlunoRepository extends JpaRepository<Aluno, Integer> {
	
    @Query("SELECT a FROM Aluno  a WHERE a.id = ?1")
    Aluno findAlunoById (int id);
	
}
