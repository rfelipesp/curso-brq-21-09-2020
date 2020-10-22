import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/shared/services/categoria.service';
import { Categoria } from 'src/app/shared/models/categoria';
import { ItemVenda } from 'src/app/shared/models/item-venda';
import { ProdutosPagination } from 'src/app/shared/models/produtos-pagination';
import { StorageService } from 'src/app/shared/services/storage.service';
import { ProdutoService } from 'src/app/shared/services/produto.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public produtos      : ProdutosPagination;
  public categorias    : Categoria[] = [];

  public pagina         : number = 0;
  public linhas         : number = 20;

  public totalElements  : number = 0;
  public totalPages     : number = 0;
  public busca          : string = "";

  constructor(
    private produtoService : ProdutoService,
    private categoriaService : CategoriaService,
    private storageService : StorageService
  ) { }

  ngOnInit(): void {
    this.getProdutos();
    this.categoriaService.getAllCategorias()
      .subscribe(
        (response : any)=>{
          this.categorias = response;
        }
      );

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

  doSearch(cat : string){
    this.produtoService.getProdutosByCategoria(this.pagina, this.linhas, cat)
    .subscribe(
      (response : any)=>{
        this.produtos = response;
        this.totalElements = response.totalElements;
        this.totalPages = response.totalPages;
      }
    );
  }

  inserirNoCarrinho(produto) {

    let itemVenda : ItemVenda = { produto : produto, quantidade : 1 , id: null };
    let carrinho : ItemVenda[] = this.storageService.getCarrinho();

    if (carrinho == null){
      carrinho = [];
    }

    let index = carrinho.findIndex( x => { return x.produto.id == produto.id });
    console.log(index);
    if (index >= 0){
      carrinho[index].quantidade++;
    }
    else {
      carrinho.push(itemVenda);
    }

    this.storageService.setCarrinho(carrinho);
    console.log(carrinho);
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
