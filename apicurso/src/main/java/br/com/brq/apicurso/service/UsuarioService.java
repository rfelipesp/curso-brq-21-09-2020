package br.com.brq.apicurso.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.exceptions.ObjectNotFoundException;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public  List<Usuario> findAll(){
		return this.usuarioRepository.findAll();
	}
	
	public void save(Usuario usuario) {
		this.usuarioRepository.save(usuario);
	}
		
	public Usuario getUsuario(int id) {
		return usuarioRepository.findById(id)
				.orElseThrow( ()-> new ObjectNotFoundException("Objeto não encontrado") );
	}
	
	public void delete(int id) {
		usuarioRepository.deleteById(id);
	}
	
	public List<Usuario> getUsuariosByName(String nome){
		return usuarioRepository.findByNomeContains(nome);
	}
	

}
