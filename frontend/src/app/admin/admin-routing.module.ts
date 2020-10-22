import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriasComponent } from './categoria/categorias/categorias.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutosComponent } from './produto/produtos/produtos.component';

const routes: Routes = [
  { path : 'produtos' , component : ProdutosComponent },
  { path : 'produtos/form' , component : ProdutoFormComponent },
  { path : 'produtos/form/:id' , component : ProdutoFormComponent },
  { path : 'categorias' , component : CategoriasComponent },
  { path : 'categorias/form' , component : CategoriaFormComponent },
  { path : 'categorias/form/:id' , component : CategoriaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
