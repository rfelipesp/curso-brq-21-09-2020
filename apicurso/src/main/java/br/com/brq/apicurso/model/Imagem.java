package br.com.brq.apicurso.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
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
public class Imagem {
	
	@Id
	@GeneratedValue ( strategy = GenerationType.SEQUENCE, generator = "imagem_seq_id" )
	@SequenceGenerator ( name = "imagem_seq_id", sequenceName = "imagem_seq_id", allocationSize = 1)
	private int id;
	
	private String url;
	
	@ManyToMany(mappedBy = "imagens")
	@JsonIgnore
	private List<Produto> produtos;

}
