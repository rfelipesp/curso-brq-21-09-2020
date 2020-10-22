package br.com.brq.apicurso;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import br.com.brq.apicurso.model.Categoria;
import br.com.brq.apicurso.model.Endereco;
import br.com.brq.apicurso.model.Imagem;
import br.com.brq.apicurso.model.Produto;
import br.com.brq.apicurso.model.Usuario;
import br.com.brq.apicurso.model.enums.Perfil;
import br.com.brq.apicurso.repository.CategoriaRepository;
import br.com.brq.apicurso.repository.EnderecoRepository;
import br.com.brq.apicurso.repository.ImagemRepository;
import br.com.brq.apicurso.repository.ProdutoRepository;
import br.com.brq.apicurso.repository.UsuarioRepository;

@SpringBootApplication
public class ApicursoApplication implements CommandLineRunner {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private EnderecoRepository enderecoRepository;
	
	@Autowired
	private CategoriaRepository categoriaRepository;
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@Autowired
	private ImagemRepository imagemRepository;
	
	@Autowired
	BCryptPasswordEncoder bCryptPasswordEncoder; 
	
	

	public static void main(String[] args) {
		SpringApplication.run(ApicursoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
//		Usuario usuario = Usuario.builder()
//				.nome("Jose da Silva")
//				.email("jose@gmail.com")
//				.senha( this.bCryptPasswordEncoder.encode("123456") )
//				.endereco(endereco)
//				.build();
//
//
//		usuario.addperfil(Perfil.ADMIN);
//		usuario.addperfil(Perfil.CLIENTE);
//		usuario = this.usuarioRepository.save(usuario);
		
//		Endereco endereco = Endereco.builder()
//							.logradouro("Av. Interlagos")
//							.numero("5699")
//							.complemento("Apto 54 Bloco 2")
//							.bairro("Interlagos")
//							.cidade("São Paulo")
//							.estado("São Paulo")
//							.build();
//		
//		endereco = this.enderecoRepository.save(endereco);
//		
//		Usuario usuario = Usuario.builder()
//							.nome("Agamenon Rodrigues")
//							.email("agamenon@gmail.com")
//							.senha( this.bCryptPasswordEncoder.encode("123456") )
//							.endereco(endereco)
//							.build();
//		
//		
//		usuario.addperfil(Perfil.ADMIN);
//		usuario.addperfil(Perfil.CLIENTE);
//		usuario = this.usuarioRepository.save(usuario);
		
//		Categoria categoria = Categoria.builder()
//										.nome("Eletrodomestico")
//										.descricao("Eletrodomestico")
//										.build();
//		
//		
//		categoriaRepository.save(categoria);
//		
//		Produto produto = Produto.builder()
//									.categoria_id(categoria)
//									.nome("Geladeira")
//									.descricao("Geladeira")
//									.preco(2500)
//									.build();
//		
//		this.produtoRepository.save(produto);
//		
//		Produto produto2 = Produto.builder()
//				.categoria_id(categoria)
//				.nome("Fogao")
//				.descricao("Fogao")
//				.preco(1500)
//				.build();
//
//		
//		
//		Imagem imagem = Imagem.builder().url("http://localhost:8080").build();
//		imagem.setProdutos(Arrays.asList(produto2));
//	
//		produto2.setImagens(Arrays.asList(imagem));	
//		
//		this.imagemRepository.save(imagem);
//		this.produtoRepository.save(produto2);
		
//		
	}
	

}
