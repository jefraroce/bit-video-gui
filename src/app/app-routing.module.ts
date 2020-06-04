import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { AutenticacionGuard } from './guardianes/autenticacion.guard';
import { AdministradorGuard } from './guardianes/administrador.guard';


const routes: Routes = [
  {
    path: '',
    component: RegistroComponent
  },
  {
    path: 'usuarios',
    canActivate: [AutenticacionGuard, AdministradorGuard],
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
