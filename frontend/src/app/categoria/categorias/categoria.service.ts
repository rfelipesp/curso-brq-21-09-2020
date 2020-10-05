import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from '../model/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  urlApi = `${environment.urlApi}/categorias`;

  // Http é um serviço
  constructor(private httpClient : HttpClient) { }

  mostrarMensagem(){
    alert('Minha mensagem');
  }

  getAllCategorias(){
    return this.httpClient.get<Categoria[]>(this.urlApi);
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


}
