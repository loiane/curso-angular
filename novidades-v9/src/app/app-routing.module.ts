import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'typescript' },
  {
    path: 'typescript',
    loadChildren: () => import('./novidades-typescript/novidades-typescript.module').then(m => m.NovidadesTypescriptModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
