import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent }, 
  { path: 'contato', component: ContatoComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
