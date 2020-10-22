import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from 'src/app/shared/models/categoria';
import { environment } from 'src/environments/environment';
import { CategoriaPagination } from '../models/categoria-pagination';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlApi = `${environment.urlApi}/categorias`;

  // Http é um serviço
  constructor(private httpClient : HttpClient) { }

  getAllCategorias(){
    return this.httpClient.get<Categoria[]>(`${this.urlApi}`);
  }

  getOneCategoria(id:number){
    return this.httpClient.get<Categoria>(`${this.urlApi}/${id}`);
  }

  createCategoria(categoria : any){
    return this.httpClient.post<Categoria>(`${this.urlApi}`, categoria);
  }

  public updateCategoria(id, categoria){
    return this.httpClient.patch<Categoria>(`${this.urlApi}/${id}`, categoria);
  }

  public deleteCategoria(id){
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }

  public getCategorias(pagina : number, linhas : number, busca : string){
    return this.httpClient.get<CategoriaPagination[]>(`${this.urlApi}/paginador?pagina=${pagina}&linhas=${linhas}&busca=${busca}`);
  }


}
