import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizarVendaComponent } from './finalizar-venda/finalizar-venda.component';


@NgModule({
  declarations: [HomeComponent, CarrinhoComponent, FinalizarVendaComponent],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    SharedModule
  ]
})
export class EcommerceModule { }
