import { CadusuarioComponent } from './cadusuario/cadusuario.component';
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';
import {ListarComponent} from './listar/listar.component';
import {AtualizarComponent} from './atualizar/atualizar.component';
import {CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [
  { path: 'usuarios', component: ListarComponent },
  { path: '', redirectTo: '/usuarios', pathMatch: 'full' },
  { path: 'atualizar/:id', component: AtualizarComponent },
  { path: 'cadusuario', component: CadusuarioComponent },
  { path: 'cadastrar', component: CadastrarComponent }
  ];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
