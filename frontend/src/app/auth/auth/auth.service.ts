import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthToken } from '../model/auth-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlApi = `${environment.urlApi}/autenticacao`;

  // Http é um serviço
  constructor(private httpClient : HttpClient) { }


  doAuth(auth : any){
    return this.httpClient.post<AuthToken>(`${this.urlApi}`, auth);
  }


}
