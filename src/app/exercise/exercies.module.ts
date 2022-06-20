import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise2Component } from './components/exercise2/exercise2.component';
import { RouterModule, Routes } from '@angular/router';
import { Exercise1Component } from './components/exercise1/exercise1.component';
import { Exercise3Component } from './components/exercise3/exercise3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { DirectivesModule } from '../directives/directive.modue';
import { Exercise4Component } from './components/exercise4/exercise4.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, },
  { path: 'one', component: Exercise1Component, },
  { path: 'two', component: Exercise2Component, },
  { path: 'three', component: Exercise3Component, },
  { path: 'four', component: Exercise4Component, }
];


@NgModule({
  declarations: [
    Exercise1Component,
    Exercise2Component,
    Exercise3Component,
    Exercise4Component,
    HomeComponent,
    Exercise4Component,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    DirectivesModule,
    ReactiveFormsModule
  ]
})
export class ExerciesModule { }
