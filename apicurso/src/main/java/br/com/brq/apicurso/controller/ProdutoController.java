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

import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.service.ProdutoService;

@RestController
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@PostMapping(value = "produtos")
	public Produto create(@RequestBody Produto produto) {
		this.produtoService.save(produto);
		return produto;
	}
	
	@GetMapping(value = "produtos")
	public List<Produto> getProdutos() {
		return this.produtoService.findAll();
		
	}
	
	@GetMapping(value = "produtos/{id}")
	public Produto getProduto (@PathVariable("id") int id) {
		return this.produtoService.getProduto(id);
	}
	
	@PatchMapping(value = "produtos/{id}")
	public void update(@RequestBody Produto produto, @PathVariable("id") int id) {
		this.produtoService.save(produto);
	}
	
	@DeleteMapping (value = "produtos/{id}")
	public void delete (@PathVariable("id") int id) {
		this.produtoService.delete(id);
	}
	
	@GetMapping(value = "produtos/search/{nome}")
	public List<Produto> getProdutosByName(@PathVariable String nome){
		return this.produtoService.getProdutosByName(nome);
	}
	

}
