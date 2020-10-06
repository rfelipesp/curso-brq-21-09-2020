import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CicloComponent } from './ciclo/ciclo.component';
import { MeuFormComponent } from './meu-form/meu-form.component';

const routes: Routes = [
  { path : 'meu-form' , component : MeuFormComponent },
  { path : 'ciclo' , component : CicloComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormularioRoutingModule { }
