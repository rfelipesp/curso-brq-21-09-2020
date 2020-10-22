import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProdutosPagination } from '../models/produtos-pagination';
import { Produto } from '../models/produto';



@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  urlApi = `${environment.urlApi}/produtos`;

  constructor(private httpClient : HttpClient) { }

  getProdutos(pagina : number, linhas : number, busca : string){
    return this.httpClient.get<ProdutosPagination[]>(`${this.urlApi}/paginador?pagina=${pagina}&linhas=${linhas}&busca=${busca}`);
  }

  getProdutosByCategoria( pagina : number, linhas : number, busca : string){
    return this.httpClient.get<ProdutosPagination[]>(`${this.urlApi}/categoria?pagina=${pagina}&linhas=${linhas}&busca=${busca}`);
  }

  saveProduto(produto : any){
    return this.httpClient.post<Produto>(`${this.urlApi}`, produto);
  }

  public deleteProduto(id){
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }

  public updateProduto(id : number, produto : any){
    return this.httpClient.patch<Produto>(`${this.urlApi}/${id}`, produto);
  }

  public getAllProdutos(){
    return this.httpClient.get(`${this.urlApi}`);
  }

  getOneProduto(id : number){
    return this.httpClient.get<Produto>(`${this.urlApi}/${id}`);
  }





}


