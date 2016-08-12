import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';

import { CursosModule } from './cursos/cursos.module';

@NgModule({
    imports: [ BrowserModule, CursosModule ],
    declarations: [ AppComponent, MeuPrimeiroComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }