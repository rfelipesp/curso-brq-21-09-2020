import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vendas } from '../models/vendas';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })
  export class VendaService {

    constructor(private http : HttpClient) { }

    getAll() {
      return this.http.get(`${environment.urlApi}/vendas`);
    }

    fecharVenda(vendas : Vendas){
        return this.http.post<Vendas>( `${environment.urlApi}/vendas`, vendas);
    }

    getPedidos(){
      return this.http.get(`${environment.urlApi}/vendas`);
    }

    deletarPedido(id){
      return this.http.delete(`${environment.urlApi}/vendas/${id}`)
    }

    getVendaById(id){
      return this.http.get<Vendas>(`${environment.urlApi}/vendas/${id}`);
    }

  }
