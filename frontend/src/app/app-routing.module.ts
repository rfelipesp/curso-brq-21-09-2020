import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

const routes: Routes = [
  { path : '' , component : MeuPrimeiroComponent },
  { path : 'home' , component : MeuPrimeiroComponent },
  { path : 'categorias', loadChildren : ()=> import('./categoria/categoria.module').then(m=> m.CategoriaModule )},
  { path : 'alunos', loadChildren : ()=> import('./aluno/aluno.module').then(m=> m.AlunoModule )},
  { path : 'formulario', loadChildren : ()=> import('./formulario/formulario.module').then(m=> m.FormularioModule )},
  { path : 'produtos', loadChildren : ()=> import('./produto/produto.module').then(m=> m.ProdutoModule )}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
