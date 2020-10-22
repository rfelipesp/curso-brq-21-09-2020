package br.com.brq.apicurso.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Venda;
import br.com.brq.apicurso.service.VendaService;

@RestController
public class VendaController {
	
	@Autowired
	private VendaService vendaService;
	
	@GetMapping(value = "vendas")
	public ResponseEntity< Page<Venda> > getProdutos(
			@RequestParam (value = "pagina", defaultValue = "0") int pagina,
			@RequestParam ( value = "linhas", defaultValue = "5" ) int linhas,
			@RequestParam ( value = "busca", defaultValue = "" ) String busca
			) {
		return ResponseEntity.ok().body(this.vendaService.getVendas(pagina, linhas, busca));
		
	}
	
	@PostMapping(value = "vendas")
	public ResponseEntity<Venda> save(@RequestBody Venda venda) {
		this.vendaService.save(venda);
		return ResponseEntity.ok().body(venda);
	} 
	
	

}
