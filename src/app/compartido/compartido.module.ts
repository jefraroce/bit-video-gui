import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { PieDePaginaComponent } from './componentes/pie-de-pagina/pie-de-pagina.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CabeceraComponent,
    PieDePaginaComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CabeceraComponent,
    PieDePaginaComponent
  ]
})
export class CompartidoModule { }
