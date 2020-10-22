import { Component, OnInit } from '@angular/core';
import { ItemVenda } from 'src/app/shared/models/item-venda';
import { Usuario } from 'src/app/shared/models/usuario';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UsuarioService } from 'src/app/shared/services/usuario.service';
import { VendaService } from 'src/app/shared/services/venda.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss']
})
export class CarrinhoComponent implements OnInit {

  public itensCarrinho: ItemVenda[] = [];
  public totalCarrinho : number;
  public calcCarrinho : number;
  public frete : number;
  public valotTotal : number;

  constructor(

    private vendasService: VendaService,
    private usuarioService: UsuarioService,
    private storageService: StorageService,
    private carrinhoService: CarrinhoService

  ) { }

  ngOnInit(): void {
    if (this.storageService.getCarrinho() != null) {

      this.carrinhoService.itensCarrinho = this.storageService.getCarrinho();

    } else {

      this.carrinhoService.itensCarrinho = [];
    }

    this.getCarrinho();

  }

  changeSuit(selectedOption: number, id): void {

    this.carrinhoService.alterarQuantidade(selectedOption, id)

    this.getCarrinho();
  }

  getUser(email) {

    let user: Usuario = new Usuario();

    this.usuarioService.getUserByEmail(email).subscribe(data => {
      user.id = data.id;
    })
    this.carrinhoService.user.id = user.id
  }

  private getCarrinho(){
    this.itensCarrinho = this.carrinhoService.itensCarrinho;
    this.calcFrete();
    this.calculoCarrinho();
    this.valorTotalCompra();
  }

  public removeItem(id){
    this.carrinhoService.removeItem(id);
    this.getCarrinho();
  }

  totalItensCarrinho(){
    return this.totalCarrinho = this.carrinhoService.totalItensCarrinho();
  }

  calculoCarrinho(){
    this.calcCarrinho = this.carrinhoService.calculoCarrinho();
  }

  calcFrete(){
    this.frete =  this.carrinhoService.frete;
  }

  valorTotalCompra(){
    this.valotTotal = this.carrinhoService.valorTotalFrete();
  }

}
