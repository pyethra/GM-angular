import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './view/contato/contato.component';
import { HomeComponent } from './view/home/home.component';
import { JogosComponent } from './view/jogos/jogos.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'Jogos',
    component: JogosComponent
  },
  {
    path: 'Contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
