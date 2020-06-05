import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PlanesComponent } from './componentes/planes/planes.component';
import { CrearPlanComponent } from './componentes/crear-plan/crear-plan.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { CrearProyectoComponent } from './componentes/crear-proyecto/crear-proyecto.component';
import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AutenticacionGuard } from './guardian/autenticacion.guard';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { DonarComponent } from './componentes/donar/donar.component';
import { GraciasPorDonarComponent } from './componentes/gracias-por-donar/gracias-por-donar.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'planes',
        canActivate: [AutenticacionGuard],
        component: PlanesComponent,
      },
      {
        path: 'planes/crear',
        canActivate: [AutenticacionGuard],
        component: CrearPlanComponent,
      },
      {
        path: 'proyectos',
        canActivate: [AutenticacionGuard],
        component: ProyectosComponent,
      },
      {
        path: 'proyectos/crear',
        canActivate: [AutenticacionGuard],
        component: CrearProyectoComponent,
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
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
