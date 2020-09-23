package br.com.brq.apicurso.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Categoria {
	
	@Id
	@GeneratedValue ( strategy = GenerationType.SEQUENCE, generator = "categoria_seq_id" )
	@SequenceGenerator ( name = "categoria_seq_id", sequenceName = "categoria_seq_id", allocationSize = 1)
	private int id;
	
	private String nome;
	private String descricao;
	
	@OneToMany(mappedBy = "categoria")
	@JsonIgnore
	private List<Produto> produtos;

}
