import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'upload'
  },
  {
    path: 'cursos',
    loadChildren: './cursos/cursos.module#CursosModule'
  },
  {
    path: 'upload',
    loadChildren: './upload-file/upload-file.module#UploadFileModule'
  },
  {
    path: 'rxjs-poc',
    loadChildren: './unsubscribe-rxjs/unsubscribe-rxjs.module#UnsubscribeRxjsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
