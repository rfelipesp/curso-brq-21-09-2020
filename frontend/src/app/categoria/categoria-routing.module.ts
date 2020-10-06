import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { CategoriasComponent } from './categorias/categorias.component';

const routes: Routes = [
  { path : 'categorias' , component : CategoriasComponent },
  { path : 'categorias/form' , component : CategoriaFormComponent },
  { path : 'categorias/form/:id' , component : CategoriaFormComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
