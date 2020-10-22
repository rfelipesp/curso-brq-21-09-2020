package br.com.brq.apicurso.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@PostMapping(value = "categorias")
	public ResponseEntity<Categoria> create(@RequestBody Categoria categoria) {
		this.categoriaService.save(categoria);
		return ResponseEntity.ok().body(categoria);
	}
	
	@GetMapping(value = "categorias")
	public ResponseEntity< List<Categoria> > getCategorias() {
		return ResponseEntity.ok().body(this.categoriaService.findAll());
	}
	
	@GetMapping(value = "categorias/{id}")
	public ResponseEntity<Categoria> getCategoria (@PathVariable("id") int id) {
		return ResponseEntity.ok().body(this.categoriaService.getCategoria(id));
	}
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@PatchMapping(value = "categorias/{id}")
	public ResponseEntity<Categoria> update(@RequestBody Categoria categoria, @PathVariable("id") int id) {
		this.categoriaService.save(categoria);
		return ResponseEntity.ok().body(categoria);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@DeleteMapping (value = "categorias/{id}")
	public void delete (@PathVariable("id") int id) {
		this.categoriaService.delete(id);
	}
	
	@GetMapping(value = "categorias/paginador")
	public ResponseEntity< Page<Categoria> > paginacao(
			@RequestParam(value = "pagina", defaultValue = "0") int pagina,
			@RequestParam(value = "linhas", defaultValue = "2") int linhas,
			@RequestParam ( value = "busca", defaultValue = "" ) String busca
			) {
		return ResponseEntity.ok().body(this.categoriaService.paginacao(pagina, linhas, busca));
		
	}
	

}
