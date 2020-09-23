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

import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.service.UsuarioService;

@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping(value = "usuarios")
	public Usuario create(@RequestBody Usuario usuario) {
		this.usuarioService.save(usuario);
		return usuario;
	}
	
	@GetMapping(value = "usuarios")
	public List<Usuario> getUsuarios() {
		return this.usuarioService.findAll();
	}
	
	@GetMapping(value = "usuarios/{id}")
	public Usuario getUsuario (@PathVariable("id") int id) {
		return this.usuarioService.getUsuario(id);
	}
	
	@PatchMapping(value = "usuarios/{id}")
	public void update(@RequestBody Usuario usuario, @PathVariable("id") int id) {
		this.usuarioService.save(usuario);
	}
	
	@DeleteMapping (value = "usuarios/{id}")
	public void delete (@PathVariable("id") int id) {
		this.usuarioService.delete(id);
	}
	
	@GetMapping(value = "usuarios/search/{nome}")
	public List<Usuario> getUsuariosByName(@PathVariable String nome){
		return this.usuarioService.getUsuariosByName(nome);
	}
	

}
