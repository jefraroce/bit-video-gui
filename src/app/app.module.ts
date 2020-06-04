import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { PlanesComponent } from './componentes/planes/planes.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { CrearProyectoComponent } from './componentes/crear-proyecto/crear-proyecto.component';
import { CrearPlanComponent } from './componentes/crear-plan/crear-plan.component';
import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    PlanesComponent,
    ProyectosComponent,
    CrearProyectoComponent,
    CrearPlanComponent,
    InicioDeSesionComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
