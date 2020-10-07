package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Aluno;
import br.com.brq.apicurso.model.Produto;
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
	
	public Page<Aluno> paginacao(int pagina, int linhas){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		return this.alunoRepository.findAll(pageRequest);
	}
	
	
	public Aluno update(int id, Aluno aluno) {
		
		Aluno update = new Aluno();
		
		update.setNome(aluno.getNome());
		update.setRa(aluno.getRa());
		update.setCurso(aluno.getCurso());
		
		return aluno;
	}
	

}
