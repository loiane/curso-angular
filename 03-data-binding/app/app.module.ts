import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { DataBindingModule } from './data-binding/data-binding.module';
import { LifeCycleComponent } from './ciclo/life-cycle.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        DataBindingModule
    ],
    declarations: [
        AppComponent,
        LifeCycleComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }