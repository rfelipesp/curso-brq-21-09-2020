package br.com.brq.apicurso.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Endereco {
	
	@Id
	@GeneratedValue ( strategy = GenerationType.SEQUENCE, generator = "endereco_seq_id" )
	@SequenceGenerator ( sequenceName = "endereco_seq_id", name = "endereco_seq_id", allocationSize = 1 )
	@Column(name = "id")
	private int id;
	
	private String logradouro;
	private String numero;
	private String complemento;
	private String bairro;
	private String localidade;
	private String uf;
	

	
	@OneToOne
	@JoinColumn ( name = "usuario_id" )
	@JsonIgnore
	private Usuario usuario;

	
}
