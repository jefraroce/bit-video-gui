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
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { DonarComponent } from './componentes/donar/donar.component';
import { GraciasPorDonarComponent } from './componentes/gracias-por-donar/gracias-por-donar.component';

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
    ProyectoComponent,
    DonarComponent,
    GraciasPorDonarComponent
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
