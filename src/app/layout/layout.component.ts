import { Component, OnInit, OnDestroy } from '@angular/core';
const jQuery = require('jquery');

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  animacion: NodeJS.Timeout;

  constructor() { }

  ngOnInit(): void {
    this.animacion = setTimeout(() => this.mostrarPublicidad(), 10000);
    this.animacion = setInterval(() => this.mostrarPublicidad(), 240000);
  }

  ngOnDestroy(): void {
    clearInterval(this.animacion);
  }

  createToast(titulo: string, mensaje: string, delay: number = 12000) {
    const toastContainer = document.getElementById('toast-list');
    if (toastContainer) {
      const icon = '<img src="assets/images/logo.svg" style="height: 24px; width: auto;" />';
      const id = Math.floor(Math.random() * 10000);

      toastContainer.innerHTML +=
        `<div id="toast-${id}" class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-delay="${delay}">
          <div class="toast-header">
            ${icon}
            <strong class="ml-1 mr-auto">${titulo}</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Cerrar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="toast-body">
            ${mensaje}
          </div>
        </div>`;

      jQuery(`#toast-${id}`).toast('show');
      setTimeout(() => {
        jQuery(`#toast-${id}`).remove();
      }, delay);
    }
  }

  mostrarPublicidad() {
    const messages = ['¡Que genial tenerte aquí!', 'Este proyecto ha sido desarrollado', 'Por Estudiantes', 'Bogotá Institute Of Technology', 'Subscribete a nuestros CURSOS', '¡Haz parte de este fascinante mundo!'];

    messages.forEach((message, i) => {
      setTimeout(() => this.createToast('BIT Video', message), i*1500);
    });
  }
}
