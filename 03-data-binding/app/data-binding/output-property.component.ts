import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contador',
  template: `
    <div>
      <button type="button" class="btn btn-primary"
        (click)="decrementa()">-</button>
      <input type="text" [value]="valor"  readonly>
      <button type="button" class="btn btn-primary"
      (click)="incrementa()">+</button>
    </div>
  `//,
  //outputs: ['mudouValor']
})
export class OutputPropertyComponent {

  @Input() valor : number = 0;

  @Output() mudouValor = new EventEmitter();

  constructor() {  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }
}
