import { Component, OnInit } from '@angular/core';
import { ProdutosPagination } from 'src/app/shared/models/produtos-pagination';
import { ProdutoService } from 'src/app/shared/services/produto.service';



@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  public produtos      : ProdutosPagination;

  public pagina         : number = 0;
  public linhas         : number = 2;

  public totalElements  : number = 0;
  public totalPages     : number = 0;
  public busca          : string = "";

  constructor(private produtoService : ProdutoService) { }

  ngOnInit(): void {
    this.getProdutos();
  }

  public getProdutos(){
    this.produtoService.getProdutos(this.pagina, this.linhas, this.busca)
    .subscribe(
      (response : any)=>{
        this.produtos = response;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
      }
    );
  }

  public onDelete(id){
    this.produtoService.deleteProduto(id)
    .subscribe(
      (dados)=>{
        console.log(dados);
        alert('Produto excluído com sucesso!');
        this.getProdutos();

      }
    );
  }

  public nextPage(){
    this.pagina == ( this.totalPages - 1 ) ? this.pagina : this.pagina++;
    this.getProdutos();
  }

  public previousPage(){
    this.pagina == 0 ? this.pagina = 0 : this.pagina--;
    this.getProdutos();
  }

  public setPage(page : number){
    this.pagina = page;
    this.getProdutos();
  }

  public onLinhaChange(){
    this.getProdutos();
  }

  public onSearch(){
    this.getProdutos();
  }

}
