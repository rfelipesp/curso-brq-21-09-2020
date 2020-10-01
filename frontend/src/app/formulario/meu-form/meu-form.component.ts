import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';

import { FormularioService } from '../formulario.service';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.scss']
})
export class MeuFormComponent implements OnInit {

public meuForm : FormGroup;
public contador : number = 0;

  constructor(private formBuilder : FormBuilder, private formularioService : FormularioService) {
    this.meuForm = this.formBuilder.group( {
        nome  : [ '', [ Validators.required ] ],
        ra    : [ '', [ Validators.required, Validators.maxLength(5) ] ],
        curso : [ '', [ Validators.required ] ]
    } );
  }

  ngOnInit(): void {
  }

  onSubmit(){

    console.log(this.meuForm);

    this.formularioService.postAluno(this.meuForm.value)
      .subscribe( (resultado : any) => {
        this.meuForm = resultado;
      },
        (error) => {
          alert('Erro ao consultar o aluno');
        }
      )

  }

  public isErrorField(fieldName){
    return ( this.meuForm.get( fieldName ).valid == false && this.meuForm.get( fieldName ).touched == true );
  }

  public receberNotificacao(event){
    this.contador++;
    console.log(event);
  }

}
