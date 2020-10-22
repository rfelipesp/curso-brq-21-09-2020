import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthToken } from '../model/auth-token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url : string = `${environment.urlApi}/autenticacao`;
  public authSubject = new Subject<boolean>();

  // Http é um serviço
  constructor(private httpClient : HttpClient) { }


  doAuth( credential : Credential){
    return this.httpClient.post<AuthToken>( this.url, credential);
  }

  public sendMessage(msg : boolean){
    this.authSubject.next(msg);
  }


}
