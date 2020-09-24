package br.com.brq.apicurso.service;

import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.repository.ProdutoRepository;

@Service
public class ProdutoService {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	public  List<Produto> findAll(){
		return this.produtoRepository.findAll();
	}
	
	public void save(Produto produto) {
		this.produtoRepository.save(produto);
	}
		
	public Produto getProduto(int id) {
		return produtoRepository.findById(id).orElse(new Produto());
	}
	
	public void delete(int id) {
		produtoRepository.deleteById(id);
	}
	
	public List<Produto> getProdutosByName(String nome){
		return produtoRepository.findByNomeContains(nome);
	}
	
	public Page<Produto> paginacao(int pagina, int linhas){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		return this.produtoRepository.findAll(pageRequest);
	}
	

}
