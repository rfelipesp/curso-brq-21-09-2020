package br.com.brq.apicurso.controller;

import java.util.ArrayList;

import javax.websocket.server.PathParam;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Aluno;

@RestController
public class AlunoController {
	
	ArrayList<Aluno> alunos = new ArrayList<Aluno>();
	
	@PostMapping(value = "alunos")
	public Aluno criaAluno(@RequestBody Aluno aluno) {
		this.alunos.add(aluno);
		return aluno;
	}
	
	@GetMapping(value = "alunos")
	public ArrayList<Aluno> getAlunos() {
		return this.alunos;
	}
	
	@GetMapping(value = "alunos/{id}")
	public Aluno getAluno (@PathVariable("id") int id) {
		return this.alunos.get(id);
	}
	
	@PatchMapping(value = "alunos/{id}")
	public void update(@RequestBody Aluno aluno, @PathVariable("id") int id) {
		this.alunos.set(id, aluno);
	}
	
	@DeleteMapping (value = "alunos/{id}")
	public void delete (@PathVariable("id") int id) {
		this.alunos.remove(id);
	}
	

}
