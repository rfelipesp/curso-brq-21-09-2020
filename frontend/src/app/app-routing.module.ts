import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardService } from './auth/guards/admin-guard.service';
import { HomeComponent } from './ecommerce/home/home.component';


const routes: Routes = [
  { path : '' , component : HomeComponent },
  { path : 'home' , component : HomeComponent },
  { path : 'admin', loadChildren : ()=> import('./admin/admin.module').then(m=> m.AdminModule ), canActivate : [ AdminGuardService ]},
  { path : 'endereco', loadChildren : ()=> import('./endereco/endereco.module').then(m=> m.EnderecoModule )},
  { path : 'ecommerce', loadChildren : ()=> import('./ecommerce/ecommerce.module').then(m=> m.EcommerceModule )},
  { path : 'auth', loadChildren : ()=> import('./auth/auth.module').then(m=> m.AuthModule )},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
