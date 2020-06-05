
import { Component, Input, OnInit } from '@angular/core';

import { ViewCell, Cell, DefaultEditor, Editor } from 'ng2-smart-table';

import { Router } from '@angular/router';

@Component({
  template: `
  
	<tbody>
    <tr>
		<td><button (click)="mostrarProyecto()" class="btn btn-primary" >Ver Proyecto</button></td>
		<td><button (click)="mostrarPlanes()" class="btn btn-primary">Ver Planes</button></td>
    </tr>
    
  </tbody>
  
    
  `,
})
export class ButtonRenderComponent implements OnInit {

  public renderValue;

  @Input() value;

  constructor(private router: Router) {  }
  
  ngOnInit() {
    this.renderValue = this.value;
  }

  mostrarProyecto() {
    this.router.navigate(['/proyectos', this.value]);
  }
  
  mostrarPlanes() {
    this.router.navigate(['/planes', this.value]);
  }


}
