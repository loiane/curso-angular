import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-binding',
  templateUrl: 'data-binding.component.html',
  /*styles: [
    `
      .highlight {
        background-color: yellow;
        font-weight: bold;
      }
    `
  ]*/
  styleUrls: ['data-binding.component.css']
})
export class DataBindingComponent {
  constructor() {  }

  url = 'http://loiane.com';
  urlImg = 'http://lorempixel.com/400/200/nature/';

  conteudoAtual : string = '';
  conteudoSalvo : string = '';

  isMouseOver = false;

  nome : string = 'abc';

  pessoa = {nome: '', idade: 18};

  nomeCurso : string = 'Curso Angular 2';

  valorInicial : number = 10;

  getValor(){
    return 1;
  }

  onClick(){
    alert('Botão clicado!');
  }

  onKeyup(event:KeyboardEvent){
    console.log(event);
    this.conteudoAtual = (<HTMLInputElement>event.target).value;
  }

  onSave(valor : string){
    this.conteudoSalvo = valor;
  }

  onMouseSpan(){
    this.isMouseOver = !this.isMouseOver;
  }

  onValorMudou(event){
    alert(event.novoValor);
  }
}
