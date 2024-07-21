import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'lista-usuarios', component: UsuarioListComponent }, 
  { path: 'clientes', component: ClienteListComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: '**', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
