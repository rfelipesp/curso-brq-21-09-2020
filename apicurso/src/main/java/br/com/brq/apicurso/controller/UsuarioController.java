package br.com.brq.apicurso.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.dto.UsuarioDto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.service.UsuarioService;

@RestController
public class UsuarioController {
	
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping(value = "usuarios")
	public ResponseEntity<Usuario> create(@RequestBody Usuario usuario) {
		this.usuarioService.save(usuario);
		return ResponseEntity.ok().body(usuario);
	}
	
	@GetMapping(value = "usuarios")
	public ResponseEntity< List<UsuarioDto> > getUsuarios() {
		List<Usuario> list = this.usuarioService.findAll();
		
		return ResponseEntity.ok().body(list.stream().map( (objeto) -> new UsuarioDto(objeto) ).collect(Collectors.toList()));
	}
	
	@GetMapping(value = "usuarios/{id}")
	public ResponseEntity<Usuario> getUsuario (@PathVariable("id") int id) {
		return ResponseEntity.ok().body(this.usuarioService.getUsuario(id));
	}
	
	@PatchMapping(value = "usuarios/{id}")
	public ResponseEntity<Usuario> update(@RequestBody Usuario usuario, @PathVariable("id") int id) {
		this.usuarioService.save(usuario);
		return ResponseEntity.ok().body(usuario);
	}
	
	@DeleteMapping (value = "usuarios/{id}")
	public void delete (@PathVariable("id") int id) {
		this.usuarioService.delete(id);
	}
	
	@GetMapping(value = "usuarios/search/{nome}")
	public ResponseEntity< List<Usuario> > getUsuariosByName(@PathVariable String nome){
		return ResponseEntity.ok().body(this.usuarioService.getUsuariosByName(nome));
	}
	

}
