package br.com.brq.apicurso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Endereco;
import br.com.brq.apicurso.repository.EnderecoRepository;
import br.com.brq.apicurso.service.EnderecoService;

@RestController
public class EnderecoController {
	
	@Autowired
	private EnderecoService enderecoService;

	
	@PostMapping(value = "enderecos")
	public ResponseEntity<Endereco> create(@RequestBody Endereco endereco) {
		this.enderecoService.save(endereco);
		return ResponseEntity.ok().body(endereco);
	}
	
	@GetMapping(value = "enderecos")
	public ResponseEntity< List<Endereco> > getEnderecos() {
		return ResponseEntity.ok().body(this.enderecoService.findAll());
		
	}
	
	@GetMapping(value = "enderecos/{id}")
	public ResponseEntity<Endereco> getEndereco (@PathVariable("id") int id) {
		return ResponseEntity.ok().body(this.enderecoService.getEndereco(id));
	}
	
	@PatchMapping(value = "enderecos/{id}")
	public void update(@RequestBody Endereco endereco, @PathVariable("id") int id) {
		this.enderecoService.update(id, endereco);
	}
	
	@DeleteMapping (value = "enderecos/{id}")
	public void delete (@PathVariable("id") int id) {
		this.enderecoService.delete(id);
	}
	
	//@GetMapping(value = "enderecos/search/{nome}")
	//public List<Endereco> getEnderecosByName(@PathVariable String nome){
	//	return this.enderecoService.getEnderecosByName(nome);
	//}
	
	@GetMapping(value = "enderecos/paginador")
	public Page<Endereco> paginacao(
			@RequestParam(value = "pagina", defaultValue = "0") int pagina,
			@RequestParam(value = "linhas", defaultValue = "2") int linhas,
			@RequestParam ( value = "busca", defaultValue = "" ) String busca
			) {
		return this.enderecoService.paginacao(pagina, linhas, busca);
		
	}
	
	
	
	

}
