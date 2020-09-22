package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

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
		return alunoRepository.findById(id).orElse(new Aluno());
	}
	
	public void delete(int id) {
		alunoRepository.deleteById(id);
	}
	
	public List<Aluno> getAlunosByName(String nome){
		return alunoRepository.findByNomeContains(nome);
	}
	

}
