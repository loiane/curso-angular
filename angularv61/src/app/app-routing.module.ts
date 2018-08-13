import { NgModule } from '@angular/core';
import { Routes, RouterModule, UrlSerializer } from '@angular/router';
import { KeyValueComponent } from './key-value/key-value.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';

const routes: Routes = [
  { path: 'keyvalue', component: KeyValueComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'alunos', component: AlunosComponent },
  { path: 'url-invalida', component: KeyValueComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      urlUpdateStrategy: 'eager', // 'deferred'
      malformedUriErrorHandler: (error: URIError, urlSerializer: UrlSerializer, url: string) => {
        // console.log(error);
        console.log(url);
        return urlSerializer.parse('/url-invalida');
      }
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
