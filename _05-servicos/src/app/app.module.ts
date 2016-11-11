import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosService } from './cursos/cursos.service';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
