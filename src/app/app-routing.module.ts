import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { CadastroComponent } from './views/cadastro/cadastro.component';
import { LoginComponent } from './views/login/login.component';
import { NotFoundComponent } from './views/not-found/not-found.component';


const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "home", component: HomeComponent},
  { path: "cadastro", component: CadastroComponent},
  { path: "404", component: NotFoundComponent},
  { path: "**", redirectTo:"404" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
