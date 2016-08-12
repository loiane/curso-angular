import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosService } from './cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CursosComponent ],
    exports: [ CursosComponent ],
    providers: [CursosService]
})
export class CursosModule { }