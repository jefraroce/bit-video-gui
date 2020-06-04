import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { DonarComponent } from './componentes/donar/donar.component';
import { GraciasPorDonarComponent } from './componentes/gracias-por-donar/gracias-por-donar.component';

const routes: Routes = [
  {
    path: 'proyectos/:id',
    component: ProyectoComponent
  },
  {
    path:'donar',
    component: DonarComponent
  },
  {
    path:'gracias-x-donar',
    component: GraciasPorDonarComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
