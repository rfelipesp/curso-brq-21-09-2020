import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Endereco } from '../models/endereco';
import { ItemVenda } from '../models/item-venda';
import { Usuario } from '../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public getLocalUser() : Usuario{
    let user = localStorage.getItem('localUser');
    if(user){
      return JSON.parse(user);
    }else{
      return null;
    }
  }

  public setLocalUser(obj){
    if(obj == null){
      localStorage.removeItem('localUser');
    }else{
      localStorage.setItem('localUser', JSON.stringify(obj));
    }
  }

  getCarrinho(): ItemVenda[] {
    //let str = localStorage.getItem(environment.storageKeysConfig.carrinho);
    let str = localStorage.getItem('carrinho');

    if (str != null) {
      return JSON.parse(str);
    }
    else {
      return null;
    }
  }

  setCarrinho(obj: ItemVenda[]) {
    if (obj != null) {
      //localStorage.setItem(environment.storageKeysConfig.carrinho, JSON.stringify(obj)  );
      localStorage.setItem('carrinho', JSON.stringify(obj));
    }
    else {
      //localStorage.removeItem(environment.storageKeysConfig.carrinho);
      localStorage.removeItem('carrinho');
    }
  }

  getEndereco(): Endereco {
    let str = localStorage.getItem(environment.storageKeysConfig.endereco);
    if (str != null) {
      return JSON.parse(str);
    }
    else {
      return null;
    }
  }

  setEndereco(obj: Endereco) {
    if (obj != null) {
      localStorage.setItem(environment.storageKeysConfig.endereco, JSON.stringify(obj));
    }
    else {
      localStorage.removeItem(environment.storageKeysConfig.endereco);
    }
  }




}
