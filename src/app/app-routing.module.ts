import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'exercise', pathMatch: 'full' },
  { path: 'exercise',  loadChildren: () => import('../app/exercies/exercies.module').then(m => m.ExerciesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
