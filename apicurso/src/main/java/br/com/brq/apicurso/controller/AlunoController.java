package br.com.brq.apicurso.controller;

import java.util.ArrayList;

import javax.websocket.server.PathParam;

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
	
	@PostMapping(value = "alunos-controller")
	public void criaAluno(@RequestBody Aluno aluno) {
		alunos.add(aluno);
	}
	
	@GetMapping(value = "alunos-controller")
	public ArrayList<Aluno> getAlunos() {
		return alunos;
	}
	
	@GetMapping(value = "alunos-controller/{id}")
	public Aluno getAluno (@PathVariable("id") int id) {
		return alunos.get(id);
	}
	
	@PatchMapping(value = "alunos-controller/{id}")
	public void update(@RequestBody Aluno aluno, @PathVariable("id") int id) {
		alunos.set(id, aluno);
	}
	

}
