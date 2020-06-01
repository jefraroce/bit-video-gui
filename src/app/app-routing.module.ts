import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { PlanesComponent } from './componentes/planes/planes.component';
import { CrearPlanComponent } from './componentes/crear-plan/crear-plan.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { CrearProyectoComponent } from './componentes/crear-proyecto/crear-proyecto.component';

const routes: Routes = [
	{
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'planes',
        component: PlanesComponent,
      },
	  {
        path: 'planes/crear',
        component: CrearPlanComponent,
      },
	  {
        path: 'proyectos',
        component: ProyectosComponent,
      },
	  {
        path: 'proyectos/crear',
        component: CrearProyectoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
