import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { CategoriaPagination } from 'src/app/shared/models/categoria-pagination';


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
    this.getCategorias();
  }

  getCategorias(){
    this.categoriaService.getCategorias(this.pagina, this.linhas, this.busca)
    .subscribe(
      (response : any)=>{
        this.paginacao = response;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
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

  public nextPage(){
    this.pagina == ( this.totalPages - 1 ) ? this.pagina : this.pagina++;
    this.getCategorias();
  }

  public previousPage(){
    this.pagina == 0 ? this.pagina = 0 : this.pagina--;
    this.getCategorias();
  }

  public setPage(page : number){
    this.pagina = page;
    this.getCategorias();
  }

  public onLinhaChange(){
    this.getCategorias();
  }

  public onSearch(){
    this.getCategorias();
  }


}
