package br.com.brq.apicurso.controller;

import java.util.List;

import javax.websocket.server.PathParam;

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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.model.Imagem;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.repository.CategoriaRepository;
import br.com.brq.apicurso.service.ProdutoService;

@RestController
public class ProdutoController {
	
	@Autowired
	private ProdutoService produtoService;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@PostMapping(value = "produtos")
	public ResponseEntity<Produto> create(@RequestBody Produto produto) {
		this.produtoService.save(produto);
		return ResponseEntity.ok().body(produto);
	}
	
	@GetMapping(value = "produtos")
	public ResponseEntity< List<Produto> > getProdutos() {
		return ResponseEntity.ok().body(this.produtoService.findAll());
		
	}
	
	@GetMapping(value = "produtos/{id}")
	public ResponseEntity<Produto> getProduto (@PathVariable("id") int id) {
		return ResponseEntity.ok().body(this.produtoService.getProduto(id));
	}
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@PatchMapping(value = "produtos/{id}")
	public ResponseEntity<Produto> update(@RequestBody Produto produto, @PathVariable("id") int id) {
		
		if (produto.getCategoria() != null) {
			Categoria c = this.categoriaRepository
					.findById( produto.getCategoria().getId() )
					.orElse( this.categoriaRepository.save( produto.getCategoria() )  );
			
			produto.setCategoria(c);
		}
		this.produtoService.save(produto);
		
		return ResponseEntity.ok().body(produto);
	}
	
	@PreAuthorize("hasAnyRole('ADMIN')")
	@DeleteMapping (value = "produtos/{id}")
	public void delete (@PathVariable("id") int id) {
		this.produtoService.delete(id);
	}
	
	
	@GetMapping(value = "produtos/paginador")
	public ResponseEntity< Page<Produto> > paginacao(
			@RequestParam (value = "pagina", defaultValue = "0") int pagina,
			@RequestParam ( value = "linhas", defaultValue = "5" ) int linhas,
			@RequestParam ( value = "busca", defaultValue = "" ) String busca
			) {
		return ResponseEntity.ok().body(this.produtoService.paginacao(pagina, linhas, busca));
		
	}
	
	@GetMapping(value = "produtos/categoria")
	public ResponseEntity< Page<Produto> > getByCategoria(
			@RequestParam (value = "pagina", defaultValue = "0") int pagina,
			@RequestParam ( value = "linhas", defaultValue = "5" ) int linhas,
			@RequestParam ( value = "busca", defaultValue = "" ) String busca
			) {
		return ResponseEntity.ok().body(this.produtoService.getProdutosByCategoria(pagina, linhas, busca));
		
	}
	
	
	

}
