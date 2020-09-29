import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';
import { FormsComponent } from './forms.component';
import { MeuFormComponent } from './meu-form/meu-form.component';


@NgModule({
  declarations: [FormsComponent, MeuFormComponent],
  imports: [
    CommonModule,
    FormsRoutingModule
  ]
})
export class FormsModule { }
