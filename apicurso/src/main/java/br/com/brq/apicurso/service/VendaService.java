package br.com.brq.apicurso.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import br.com.brq.apicurso.model.Venda;
import br.com.brq.apicurso.repository.VendaRepository;

@Service
public class VendaService {
	
	@Autowired
	private VendaRepository vendaRepository;

	public Venda getVenda(int id) {
		return vendaRepository.findById(id).orElse(new Venda());
	}
	
	public Page<Venda> getVendas(int pagina, int linhas, String busca){
		PageRequest pageRequest = PageRequest.of(pagina, linhas);
		return this.vendaRepository.findByUsuarioNomeContainsIgnoreCase(busca, pageRequest);
	}

	public void save(Venda venda) {
		this.vendaRepository.save(venda);
	}
	
	
	
	
	
}
