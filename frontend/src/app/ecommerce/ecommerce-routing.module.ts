import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FinalizarVendaComponent } from './finalizar-venda/finalizar-venda.component';

const routes: Routes = [
  { path : 'carrinho' , component : CarrinhoComponent },
  { path : 'finalizar' , component : FinalizarVendaComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
