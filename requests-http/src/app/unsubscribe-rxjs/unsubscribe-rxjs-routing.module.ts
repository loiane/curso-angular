import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UnsubscribePocComponent } from './unsubscribe-poc/unsubscribe-poc.component';

const routes: Routes = [
  {
    path: '', component: UnsubscribePocComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsubscribeRxjsRoutingModule { }
