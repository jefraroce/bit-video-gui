import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor(private http: HttpClient) { }

  traerProyectos() {
    return this.http.get(`${environment.API_URL}/proyecto`);
  }

  eliminarProyecto(id) {
    return this.http.delete(`${environment.API_URL}/proyecto/${id}`);
  }
  
  editarProyecto(id, proyecto) {
    return this.http.put(`${environment.API_URL}/proyecto/${id}`, proyecto);
  }
  
  crearProyecto(proyecto) {
    return this.http.post(`${environment.API_URL}/proyecto`, proyecto);
  }
}