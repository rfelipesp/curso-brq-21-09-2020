import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Endereco } from 'src/app/shared/models/endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  urlApi = `${environment.urlApi}`;

  constructor(private httpClient : HttpClient) { }

  getEndereco(cep : string){

    return this.httpClient.get('https://viacep.com.br/ws/'+ cep +'/json/');

  }

  saveEndereco(userId : number, endereco : any){
    return this.httpClient.patch<Endereco>(`${this.urlApi}/enderecos/${userId}`, endereco);
  }


}


