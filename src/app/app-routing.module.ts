import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';


const routes: Routes = [
  {
    path: '',
    component: RegistroComponent
  },
  {
    path: 'usuarios',
    component: ListaUsuariosComponent
  },
  {
    path: 'usuarios/:id',
    component: UsuarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
