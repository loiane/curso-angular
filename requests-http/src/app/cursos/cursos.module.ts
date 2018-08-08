import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

@NgModule({
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  declarations: [CursosListaComponent]
})
export class CursosModule { }
