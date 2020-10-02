import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  urlApi = `${environment.urlApi}/alunos`;

  // Http é um serviço
  constructor(private httpClient : HttpClient) { }

  mostrarMensagem(){
    alert('Minha mensagem');
  }

  getAllAlunos(){
    return this.httpClient.get(this.urlApi);
  }

  getOneAluno(id:number){
    return this.httpClient.get(`${this.urlApi}/${id}`);
  }

  createAluno(aluno : any){
    return this.httpClient.post(`${this.urlApi}`, aluno);
  }

  public updateAluno(id, aluno){
    return this.httpClient.patch(`${this.urlApi}/${id}`, aluno);
  }

  public deleteAluno(id){
    return this.httpClient.delete(`${this.urlApi}/${id}`);
  }


}
