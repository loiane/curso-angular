import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NovidadesTypescriptRoutingModule } from './novidades-typescript-routing.module';
import { NovidadesComponent } from './novidades/novidades.component';


@NgModule({
  declarations: [NovidadesComponent],
  imports: [
    CommonModule,
    NovidadesTypescriptRoutingModule
  ]
})
export class NovidadesTypescriptModule { }
