import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.scss']
})
export class NovidadesComponent implements OnInit {

  tarefa: any = {
    desc: 'Descrição da tarefa',
    responsavel: {
      usuario: null
    }
    // responsavel : {nome: 'Loiane'}
  };
  valorPadrao = 'Loiane';

  constructor() { }

  ngOnInit(): void {
  }

  upperCase() {
    if (this.tarefa && this.tarefa.responsavel && this.tarefa.responsavel.usuario) {
      this.tarefa.responsavel.usuario.toUpperCase();
     }

    // this.tarefa.responsavel.usuario.toUpperCase();

    const user = this.tarefa?.responsavel?.usuario?.toUpperCase() ?? this.valorPadrao;

    return user;
  }

}
