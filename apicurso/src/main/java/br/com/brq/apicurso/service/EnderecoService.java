package br.com.brq.apicurso.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Endereco;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.repository.EnderecoRepository;

@Service
public class EnderecoService {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	
	public  List<Endereco> findAll(){
		return this.enderecoRepository.findAll();
	}
	
	public void save(Endereco endereco) {
		this.enderecoRepository.save(endereco);
	}
	
	public void update(int id, Endereco endereco) {
		
		Usuario usuario = usuarioService.getUsuario(id);
		
		int idEnd = usuario.getEndereco().getId();
		endereco.setId(idEnd);
		endereco.setUsuario(usuario);
		
		enderecoRepository.save(endereco);		
	

	}
		
	public Endereco getEndereco(int id) {
		return enderecoRepository.findById(id).orElse(new Endereco());
	}
	
	public void delete(int id) {
		enderecoRepository.deleteById(id);
	}
	
	//public List<Endereco> getEnderecosByName(String nome){
	//	return enderecoRepository.findByNomeContains(nome);
	//}
	
	public Page<Endereco> paginacao(int pagina, int linhas, String busca){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		
		//busca = busca.toUpperCase();
		//return this.enderecoRepository.findByNome(busca, pageRequest);
		
		return this.enderecoRepository.findByLogradouroContainsIgnoreCase(busca, pageRequest);
	}
	

}
