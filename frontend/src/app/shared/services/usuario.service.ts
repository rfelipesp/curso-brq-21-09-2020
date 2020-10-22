import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {

  }

  getAll() {

    return this.http.get<Usuario[]>(environment.urlApi + `/usuarios`);
  }

  getOneUsuario(id) {
    return this.http.get<Usuario>(environment.urlApi + `/usuarios/${id}`);
  }

  getUserByEmail(email) {
    return this.http.get<Usuario>(environment.urlApi + `/usuarios/email/${email}`);
  }

  addUsuario(usuario) {

    return this.http.post<Usuario>(environment.urlApi + `/usuarios`, usuario);
  }
  updateUsuario(id, usuario) {

    return this.http.patch<Usuario>(environment.urlApi + `/usuarios/${id}`, usuario);

  }
  UsuarioUser(senha, email, usuario) {

    return this.http.post<Usuario[]>(environment.urlApi + `/usuarios/${email}/${senha}`, usuario);
  }
  verificarNivelDeAcesso(cpf, nivel, usuario) {

    return this.http.post<Usuario[]>(environment.urlApi + `/usuarios/${cpf}/${nivel}`, usuario);
  }
  pesquisarPorCpf(cpf) {

    return this.http.get<Usuario>(environment.urlApi + `/usuarios/cpf/${cpf}`)
  }
  pesquisarPorNome(nome) {

    return this.http.get<Usuario>(environment.urlApi + `/usuarios/nome/${nome}`)
  }

}
