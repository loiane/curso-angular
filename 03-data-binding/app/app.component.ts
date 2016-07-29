import { Component } from '@angular/core';

import { DataBindingComponent } from './data-binding/data-binding.component';
import {LifeCycleComponent} from './ciclo/life-cycle.component';

@Component({
    selector: 'my-app',
    template: `
      <lifecycle [valorInicial]="valorInicial" *ngIf="deletarConteudo != true"></lifecycle>
      <button (click)="valorInicial = 20">Mudar o valor</button>
      <button (click)="deletarConteudo = true">Deletar tag life cycle</button>
      <exemplo-data-binding></exemplo-data-binding>
    `,
    directives: [DataBindingComponent, LifeCycleComponent]
})
export class AppComponent {

  deletarConteudo = false;
  valorInicial = 15;

}
