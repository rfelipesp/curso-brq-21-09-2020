import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  // Http é um serviço 
  constructor(private httpClient : HttpClient) { }

  mostrarMensagem(){
    alert('Minha mensagem');
  }

  getAllAlunos(){
    return this.httpClient.get('http://127.0.0.1:8081/alunos');
  }

}
