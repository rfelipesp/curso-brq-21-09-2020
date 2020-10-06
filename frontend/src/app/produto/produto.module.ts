import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';


@NgModule({
  declarations: [ProdutosComponent, ProdutoFormComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
