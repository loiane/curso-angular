import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovidadesComponent } from './novidades/novidades.component';

const routes: Routes = [
  { path: '', component: NovidadesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NovidadesTypescriptRoutingModule { }
