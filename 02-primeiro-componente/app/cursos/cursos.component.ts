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
  templateUrl: 'cursos.component.html',
  providers: [CursosService]
})
export class CursosComponent {

  nomePortal = 'loiane.traning';

  
}
