import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteComponent } from './cliente/cliente.component';

import { PedidoComponent } from './pedido/pedido.component';
import { ProductoComponent } from './producto/producto.component';
import { FacturaComponent } from './factura/factura.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentaComponent } from './venta/venta.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'usuarios', component: UsuarioComponent },
  { path: 'lista-usuarios', component: UsuarioListComponent }, 
  { path: 'clientes', component: ClienteListComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: 'pedido', component: PedidoComponent },
  { path: 'producto', component: ProductoComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'venta', component: VentaComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' },
  { path: '**', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
