import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { IniciarComponent } from './views/iniciar/iniciar.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "iniciar", component: IniciarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
