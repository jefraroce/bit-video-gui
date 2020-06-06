import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { CrearProyectoComponent } from './crear-proyecto/crear-proyecto.component';
import { PlanesComponent } from './planes/planes.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [CrearPlanComponent, ProyectosComponent, CrearProyectoComponent, PlanesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SmartTableModule
  ]
})
export class AdminModule { }
