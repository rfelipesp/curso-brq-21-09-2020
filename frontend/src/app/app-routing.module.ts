import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';

const routes: Routes = [
  { path : '' , component : MeuPrimeiroComponent },
  { path : 'home' , component : MeuPrimeiroComponent },
  { path : 'categorias', loadChildren : ()=> import('./categoria/categoria.module').then(m=> m.CategoriaModule )},
  { path : 'alunos', loadChildren : ()=> import('./aluno/aluno.module').then(m=> m.AlunoModule )},
  { path : 'formulario', loadChildren : ()=> import('./formulario/formulario.module').then(m=> m.FormularioModule )},
  { path : 'produtos', loadChildren : ()=> import('./produto/produto.module').then(m=> m.ProdutoModule )},
  { path : 'auth', loadChildren : ()=> import('./auth/auth.module').then(m=> m.AuthModule )}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
