import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/shared/models/usuario';
import { StorageService } from 'src/app/shared/services/storage.service';
import { EnderecoService } from './endereco.service';

@Component({
  selector: 'app-endereco-form',
  templateUrl: './endereco-form.component.html',
  styleUrls: ['./endereco-form.component.scss']
})
export class EnderecoFormComponent implements OnInit {

  public enderecoForm : FormGroup;
  public cep : string;
  public logradouro : string;
  public numero : string;
  public complemento : string;
  public bairro : string;
  public localidade : string;
  public uf : string


  constructor(

    private formBuilder : FormBuilder,
    private enderecoService : EnderecoService,
    private storageService  : StorageService,
    private toastr   : ToastrService

    ) {

    this.enderecoForm = this.formBuilder.group( {
      cep  : [ '', [ Validators.required, , Validators.maxLength(9) ] ],
      logradouro    : [ '', [ Validators.required ] ],
      numero    : [ '', [ Validators.required ] ],
      complemento    : [ ''],
      bairro    : [ '', [ Validators.required ] ],
      localidade    : [ '', [ Validators.required ] ],
      uf : [ '', [ Validators.required ] ]
  } );

  }

  ngOnInit(): void {
  }

  onSearch(){
    this.enderecoService.getEndereco(this.cep)
    .subscribe(
      (dados)=>{
        console.log(dados);
        this.enderecoForm.patchValue(dados);
      }
    );
  }

  onSubmit(){

    let usuarioStorage : Usuario = this.storageService.getLocalUser();
    //let userId = Object.assign(this.enderecoForm.value, { usuario : usuarioStorage.id });

    this.enderecoService.saveEndereco(usuarioStorage.id, this.enderecoForm.value)
    .subscribe( (resultado : any) => {
      this.toastr.success('Endereço alterado com sucesso com sucesso!');

    },
      (error) => {
        this.toastr.error('Erro ao tentar alterar o endereço');
      }
    );

  }

   public isErrorField(fieldName){
    return ( this.enderecoForm.get( fieldName ).valid == false && this.enderecoForm.get( fieldName ).touched == true );
  }

}
