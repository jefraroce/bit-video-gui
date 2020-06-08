import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { PlanesComponent } from './planes/planes.component';
import { MisDonacionesComponent } from './mis-donaciones/mis-donaciones.component';


const routes: Routes = [
  {
    path: 'planes/:id',
    component: PlanesComponent,
  },
  {
    path: 'planes/crear/:id',
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
  {
    path: 'mi-recaudacion',
    component: MisDonacionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
