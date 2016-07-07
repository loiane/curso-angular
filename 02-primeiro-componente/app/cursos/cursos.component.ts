import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cursos-lista',
  /*template: `
      <h3>Cursos {{ nomePortal }}</h3>
      <ul>
        <li *ngFor="let curso of cursos">
          {{ curso }}
        </li>
      </ul>
  `*/
  templateUrl: 'cursos.component.html'
})
export class CursosComponent {

  nomePortal = 'loiane.traning';

  cursos = ['Angular 2', 'Java',  'Ext JS'];

}
