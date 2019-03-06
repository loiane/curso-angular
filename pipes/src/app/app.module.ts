import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { ExemplosPipesComponent } from './exemplos-pipes/exemplos-pipes.component';
import { CamelCasePipe } from './camel-case.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';

import ptBr from '@angular/common/locales/pt'; // necessário a partir do Angular v5
import { registerLocaleData } from '@angular/common'; // necessário a partir do Angular v5
registerLocaleData(ptBr); // necessário a partir do Angular v5

@NgModule({
  declarations: [
    AppComponent,
    ExemplosPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    /*{
      provide: LOCALE_ID,
      useValue: 'pt-BR'
    }*/
    /* SettingsService,
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: ptbrLocale
    } */
    { provide: LOCALE_ID, useValue: 'pt' } // necessário a partir do Angular v5 pt-BR nao é mais suportado
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
