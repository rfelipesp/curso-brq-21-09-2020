import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [CategoriasComponent, CategoriaFormComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    SharedModule

  ],
  exports : [CategoriasComponent]
})
export class CategoriaModule { }
