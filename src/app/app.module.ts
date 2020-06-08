import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { InicioDeSesionComponent } from './componentes/inicio-de-sesion/inicio-de-sesion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import { DonarComponent } from './componentes/donar/donar.component';
import { GraciasPorDonarComponent } from './componentes/gracias-por-donar/gracias-por-donar.component';
import { CompartidoModule } from './compartido/compartido.module';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { UrlSeguraPipe } from './utilidades/url-segura.pipe';
import { ListaProyectosComponent } from './componentes/lista-proyectos/lista-proyectos.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    InicioDeSesionComponent,
    RegistroComponent,
    ProyectoComponent,
    DonarComponent,
    GraciasPorDonarComponent,
    UrlSeguraPipe,
    InicioComponent,
    ListaProyectosComponent,
    NosotrosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SmartTableModule,
    CompartidoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
