import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveSearchRoutingModule } from './reactive-search-routing.module';
import { LibSearchComponent } from './lib-search/lib-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LibSearchComponent],
  imports: [
    CommonModule,
    ReactiveSearchRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveSearchModule { }
