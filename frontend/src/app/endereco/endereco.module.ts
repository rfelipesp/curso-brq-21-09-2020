import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecoRoutingModule } from './endereco-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EnderecoFormComponent } from '../ecommerce/endereco/endereco-form/endereco-form.component';



@NgModule({
  declarations: [EnderecoFormComponent],
  imports: [
    CommonModule,
    EnderecoRoutingModule,
    SharedModule
  ]
})
export class EnderecoModule { }
