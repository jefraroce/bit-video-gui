
import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  template: `<div>
    <button (click)="mostrarProyecto()" class="btn btn-primary" >Ver Proyecto</button>
		<button (click)="mostrarPlanes()" class="btn btn-primary">Ver Planes</button>
  </div>`,
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
