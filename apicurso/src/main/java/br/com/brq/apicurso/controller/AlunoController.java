package br.com.brq.apicurso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Aluno;
import br.com.brq.apicurso.service.AlunoService;

@RestController
public class AlunoController {
	
	@Autowired
	private AlunoService alunoService;
	
	@PostMapping(value = "alunos")
	public Aluno create(@RequestBody Aluno aluno) {
		this.alunoService.save(aluno);
		return aluno;
	}
	
	@GetMapping(value = "alunos")
	public List<Aluno> getAlunos() {
		return this.alunoService.findAll();
	}
	
	@GetMapping(value = "alunos/{id}")
	public Aluno getAluno (@PathVariable("id") int id) {
		return this.alunoService.getAluno(id);
	}
	
	@PatchMapping(value = "alunos/{id}")
	public void update(@RequestBody Aluno aluno, @PathVariable("id") int id) {
		this.alunoService.save(aluno);
	}
	
	@DeleteMapping (value = "alunos/{id}")
	public void delete (@PathVariable("id") int id) {
		this.alunoService.delete(id);
	}
	
	@GetMapping(value = "alunos/search/{nome}")
	public List<Aluno> getAlunosByName(@PathVariable String nome){
		return this.alunoService.getAlunosByName(nome);
	}
	

}
