import { Component, OnInit } from '@angular/core';
import { CategoriaPagination } from '../model/categoria-pagination';
import { CategoriaService } from './categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  //public categorias   : Categoria[] = [];
  public paginacao      : CategoriaPagination;

  public pagina         : number = 0;
  public linhas         : number = 2;

  public totalElements  : number = 0;
  public totalPages     : number = 0;
  public busca          : string = "";

  constructor(private categoriaService : CategoriaService) { }

  ngOnInit(): void {
    //this.getCategorias();
    this.getCatPagination();
  }

  meuEvento(){
    this.categoriaService.mostrarMensagem();
  }

  getCategorias(){
    // this.categoriaService.getAllCategorias()
    //   .subscribe( (resultado) => {
    //     console.log(resultado);
    //     this.categorias = resultado;
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    //   );
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

  public getCatPagination(){
    this.categoriaService.getPagination(this.pagina, this.linhas, this.busca)
    .subscribe(
      (response : any)=>{
        this.paginacao = response;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
      }
    );
  }

  public nextPage(){
    this.pagina == ( this.totalPages - 1 ) ? this.pagina : this.pagina++;
    this.getCatPagination();
  }

  public previousPage(){
    this.pagina == 0 ? this.pagina = 0 : this.pagina--;
    this.getCatPagination();
  }

  public setPage(page : number){
    this.pagina = page;
    this.getCatPagination();
  }

  public onLinhaChange(){
    this.getCatPagination();
  }

  public onSearch(){
    this.getCatPagination();
  }


}
