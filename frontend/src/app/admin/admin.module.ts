import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProdutosComponent } from './produto/produtos/produtos.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { CategoriasComponent } from './categoria/categorias/categorias.component';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';


@NgModule({
  declarations: [ProdutosComponent, ProdutoFormComponent, CategoriasComponent, CategoriaFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
