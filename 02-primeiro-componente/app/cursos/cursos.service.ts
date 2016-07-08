import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos(){
    return ['Angular 2', 'Java',  'Ext JS', 'Estrutura de Dados'];
  }
}
