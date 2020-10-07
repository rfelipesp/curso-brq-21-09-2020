package br.com.brq.apicurso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.repository.CategoriaRepository;
import br.com.brq.apicurso.service.CategoriaService;

@RestController
public class CategoriaController {
	
	@Autowired
	private CategoriaService categoriaService;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@PostMapping(value = "categorias")
	public Categoria create(@RequestBody Categoria categoria) {
		this.categoriaService.save(categoria);
		return categoria;
	}
	
	@GetMapping(value = "categorias")
	public List<Categoria> getCategorias() {
		return this.categoriaService.findAll();
		
	}
	
	@GetMapping(value = "categorias/{id}")
	public Categoria getCategoria (@PathVariable("id") int id) {
		return this.categoriaService.getCategoria(id);
	}
	
	@PatchMapping(value = "categorias/{id}")
	public void update(@RequestBody Categoria categoria, @PathVariable("id") int id) {
		this.categoriaService.save(categoria);
	}
	
	@DeleteMapping (value = "categorias/{id}")
	public void delete (@PathVariable("id") int id) {
		this.categoriaService.delete(id);
	}
	
	//@GetMapping(value = "categorias/search/{nome}")
	//public List<Categoria> getCategoriasByName(@PathVariable String nome){
	//	return this.categoriaService.getCategoriasByName(nome);
	//}
	
	@GetMapping(value = "categorias/paginador")
	public Page<Categoria> paginacao(
			@RequestParam(value = "pagina", defaultValue = "0") int pagina,
			@RequestParam(value = "linhas", defaultValue = "2") int linhas,
			@RequestParam ( value = "busca", defaultValue = "" ) String busca
			) {
		return this.categoriaService.paginacao(pagina, linhas, busca);
		
	}
	

}
