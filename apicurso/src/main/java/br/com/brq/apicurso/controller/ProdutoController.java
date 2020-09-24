package br.com.brq.apicurso.controller;

import java.util.List;

import javax.websocket.server.PathParam;

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
		
		if (produto.getCategoria() != null) {
			Categoria c = this.categoriaRepository
					.findById( produto.getCategoria().getId() )
					.orElse( this.categoriaRepository.save( produto.getCategoria() )  );
			
			produto.setCategoria(c);
		}
		
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
	
	@GetMapping(value = "produtos/paginador")
	public Page<Produto> paginacao(
			@RequestParam(value = "pagina", defaultValue = "0") int pagina,
			@RequestParam(value = "linhas", defaultValue = "5") int linhas 
			) {
		return this.produtoService.paginacao(pagina, linhas);
		
	}
	

}
