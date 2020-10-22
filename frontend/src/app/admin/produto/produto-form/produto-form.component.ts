import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { Categoria } from 'src/app/shared/models/categoria';
import { ProdutoService } from 'src/app/shared/services/produto.service';




@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent implements OnInit {

  public produtoForm : FormGroup;
  public categorias   : Categoria[] = [];
  public isEdicao : boolean = false;
  private idProduto : number = 0;
  public textoBotao : string = 'Salvar';
  private urlImage : string;

  constructor(

    private formBuilder : FormBuilder,
    private produtoService : ProdutoService,
    private categoriaService : CategoriaService,
    private activateRout : ActivatedRoute,
    private router : Router,
    private toastr : ToastrService

  ) {
    this.produtoForm = this.formBuilder.group( {
      id    : [ '', []],
      nome  : [ '', [ Validators.required ] ],
      descricao    : [ '', [ Validators.required ] ],
      preco    : [ '', [ Validators.required ] ],
      categoria    : [ '', [ Validators.required ] ],
    } );
  }

  ngOnInit(): void {
    this.categoriaService.getAllCategorias()
    .subscribe(
      (response : any)=>{
        this.categorias = response;
      }
    );

    this.activateRout.params
      .subscribe(
        (parametros) => {
            if(parametros.id){
              this.isEdicao = true;
              this.textoBotao = 'Editar';
              this.getOneProduto(parametros.id);
              this.idProduto = parametros.id;
          }
        }
      );
  }

  onSubmit(){
    this.produtoForm.value.categoria = this.categorias.find(c => c.id == this.produtoForm.value.categoria);

    if(this.isEdicao){
      this.updateProduto(this.idProduto, this.produtoForm.value );
    }else{
      this.saveProduto(this.produtoForm.value);
    }
  }

  saveProduto(produto){
    console.log(produto);
    this.produtoService.saveProduto(produto)
      .subscribe( (resultado : any) => {
        this.produtoForm = resultado;
        this.toastr.success('Produto cadastrado com sucesso!');
        this.router.navigate(['/produtos']);
      },
        (error) => {
          this.toastr.error('Erro ao tentar cadastrar produto');
        }
      )
  }

  private updateProduto(id, produto){
    this.produtoService.updateProduto(id, produto)
      .subscribe(
        (dados)=>{
          console.log(dados);
          // alert(JSON.stringify(dados));
          this.toastr.success('Produto alterado com sucesso!');
          this.router.navigate(['/produtos']);
        },
        (error) => {
          this.toastr.error('Erro ao tentar alterar produto');
          // alert('Erro ao atualizar o categoria');
        }
      );
  }


  private getOneProduto(id){
    this.produtoService.getOneProduto(id)
      .subscribe(
        (dados)=>{
          console.log(dados);
          this.produtoForm.patchValue(dados);
        }
      );
  }

  getImage(event){
    console.log(event);
    this.urlImage = event.toString();
  }

  public isErrorField(fieldName){
    return ( this.produtoForm.get( fieldName ).valid == false && this.produtoForm.get( fieldName ).touched == true );
  }

}
