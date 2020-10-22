import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnderecoFormComponent } from '../ecommerce/endereco/endereco-form/endereco-form.component';


const routes: Routes = [
  { path : '' , component : EnderecoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnderecoRoutingModule { }
