import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlunoModule } from './aluno/aluno.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FormularioModule } from './formulario/formulario.module';
import { CicloComponent } from './formulario/ciclo/ciclo.component';
import { AlunoRoutingModule } from './aluno/aluno-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaModule } from './categoria/categoria.module';




@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponent,
    NavbarComponent,
    CicloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlunoModule,
    AlunoRoutingModule,
    FormularioModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CategoriaModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
