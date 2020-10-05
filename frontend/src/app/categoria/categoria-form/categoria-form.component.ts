import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categorias/categoria.service';


@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit {

  public categoriaForm : FormGroup;
  public isEdicao : boolean = false;
  private idCategoria : number = 0;
  public textoBotao : string = 'Salvar';

  constructor(
    private formBuilder : FormBuilder,
    private categoriaService : CategoriaService,
    private activateRout : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService
  ) {
    this.categoriaForm = this.formBuilder.group( {
      id    : [ '', []],
      nome  : [ '', [ Validators.required ] ],
      descricao    : [ '', [ Validators.required ] ],
    } );
   }

  ngOnInit(): void {
    this.activateRout.params
      .subscribe(
        (parametros) => {
          console.log(parametros);

          if(parametros.id){
              this.isEdicao = true;
              this.textoBotao = 'Editar';
              this.getOneCategoria(parametros.id);
              this.idCategoria = parametros.id;
          }
        }
      );
  }

  onSubmit(){
    if(this.isEdicao){
      this.updateCategoria(this.idCategoria, this.categoriaForm.value );
    }else{
      this.createCategoria(this.categoriaForm.value);
    }
  }

  createCategoria(categoria){
    this.categoriaService.createCategoria(categoria)
      .subscribe( (resultado : any) => {
        this.categoriaForm = resultado;
        this.toastr.success('Categoria cadastrado com sucesso!');
        this.router.navigate(['/categorias']);
      },
        (error) => {
          this.toastr.error('Erro ao tentar cadastrar categoria');
        }
      )
  }

  private updateCategoria(id, categoria){
    this.categoriaService.updateCategoria(id, categoria)
      .subscribe(
        (dados)=>{
          console.log(dados);
          // alert(JSON.stringify(dados));
          this.toastr.success('Categoria alterado com sucesso!');
          this.router.navigate(['/categorias']);
        },
        (error) => {
          this.toastr.error('Erro ao tentar alterar categoria');
          // alert('Erro ao atualizar o categoria');
        }
      );
  }


  private getOneCategoria(id){
    this.categoriaService.getOneCategoria(id)
      .subscribe(
        (dados)=>{
          console.log(dados);
          this.categoriaForm.patchValue(dados);
        }
      );
  }


  public isErrorField(fieldName){
    return ( this.categoriaForm.get( fieldName ).valid == false && this.categoriaForm.get( fieldName ).touched == true );
  }



}
