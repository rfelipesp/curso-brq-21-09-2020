import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  public categorias   : any;
  public categoria   : Categoria[];
  public categoriaId  : number;

  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  meuEvento(){
    this.categoriaService.mostrarMensagem();
  }

  getCategorias(){
    this.categoriaService.getAllCategorias()
      .subscribe( (resultado) => {
        console.log(resultado);
        this.categorias = resultado;
      },
      (error) => {
        console.log(error);
      }
      );
  }

  public onDelete(id){
    this.categoriaService.deleteCategoria(id)
    .subscribe(
      (dados)=>{
        console.log(dados);
        alert('Categoria excluído com sucesso!');
        this.getCategorias();

      }
    );
  }


}
