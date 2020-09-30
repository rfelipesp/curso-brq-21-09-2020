import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  // private aluno : {};

  constructor(private httpClient : HttpClient) { }

  postAluno(aluno : any){

    return this.httpClient.post('http://127.0.0.1:8081/alunos', aluno);
   
  }


}


