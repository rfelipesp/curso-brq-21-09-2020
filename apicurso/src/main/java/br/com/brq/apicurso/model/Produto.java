package br.com.brq.apicurso.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Produto {
	
	@Id
	@GeneratedValue ( strategy = GenerationType.SEQUENCE, generator = "produto_seq_id" )
	@SequenceGenerator ( name = "produto_seq_id", sequenceName = "produto_seq_id", allocationSize = 1)
	private int id;
	
	private String nome;
	private String descricao;
	private float preco;
	
	@ManyToOne
	@JoinColumn(name = "categoria_id")
	private Categoria categoria;
	
	@ManyToMany
	@JoinTable( name = "produto_imagem",
				joinColumns = @JoinColumn(name="produto_id"),
				inverseJoinColumns = @JoinColumn(name="imagem_id")
	)
	private List<Imagem> imagens;


}
