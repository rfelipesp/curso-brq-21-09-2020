package br.com.brq.apicurso.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.repository.CategoriaRepository;

@Service
public class CategoriaService {
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	public  List<Categoria> findAll(){
		return this.categoriaRepository.findAll();
	}
	
	public void save(Categoria categoria) {
		this.categoriaRepository.save(categoria);
	}
		
	public Categoria getCategoria(int id) {
		return categoriaRepository.findById(id).orElse(new Categoria());
	}
	
	public void delete(int id) {
		categoriaRepository.deleteById(id);
	}
	
	public List<Categoria> getCategoriasByName(String nome){
		return categoriaRepository.findByNomeContains(nome);
	}
	

}
