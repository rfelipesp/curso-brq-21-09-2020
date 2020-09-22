package br.com.brq.apicurso.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Aluno;
import br.com.brq.apicurso.repository.AlunoRepository;

@Service
public class AlunoService {
	
	@Autowired
	private AlunoRepository alunoRepository;
	
	public  List<Aluno> findAll(){
		return this.alunoRepository.findAll();
	}
	
	public void save(Aluno aluno) {
		this.alunoRepository.save(aluno);
	}
	
	public Aluno getAluno(int id) {
		return alunoRepository.findAlunoById(id);
	}
	
	public void delete(Aluno aluno) {
		alunoRepository.delete(aluno);
	}
	

}
