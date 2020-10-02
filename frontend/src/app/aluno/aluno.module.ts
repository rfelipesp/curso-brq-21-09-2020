import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoListComponent } from './aluno-list/aluno-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlunoRoutingModule } from './aluno-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    AlunoListComponent,
    AlunoFormComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AlunoRoutingModule,
    SharedModule,
    ToastrModule.forRoot()
  ],
  exports : [AlunoListComponent]
})
export class AlunoModule { }
