import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AutenticacionGuard } from './guardian/autenticacion.guard';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { DonarComponent } from './componentes/donar/donar.component';
import { GraciasPorDonarComponent } from './componentes/gracias-por-donar/gracias-por-donar.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ListaProyectosComponent } from './componentes/lista-proyectos/lista-proyectos.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'usuario/inicio-de-sesion',
        component: InicioDeSesionComponent,
      },
      {
        path: 'usuario/registro',
        component: RegistroComponent,
      },
      {
        path: 'proyectos',
        component: ListaProyectosComponent
      },
      {
        path: 'nosotros',
        component: NosotrosComponent
      },
      {
        path: 'proyectos/:id',
        component: ProyectoComponent
      },
      {
        path:'proyectos/:id/donar',
        component: DonarComponent
      },
      {
        path:'gracias-x-donar/:id',
        component: GraciasPorDonarComponent
      },
      {
        path: 'admin',
        canActivate: [AutenticacionGuard],
        loadChildren: () => import('./componentes/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
