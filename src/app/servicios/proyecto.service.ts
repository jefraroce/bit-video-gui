import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

    private opciones = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlY2YyMzU3ZmVhODY1NDI1ZDUyNzIyNiIsIm5vbWJyZSI6IlNhbXkiLCJmZWNoYURlRXhwaXJhY2lvbiI6MTU5MTE0NDA3OH0.C4m_4DoxHgZeJktzPQhtpjDaXG5XG9U3n6Cp6vG9GL4'
      })
    }
  constructor(private http: HttpClient) { }

  traerProyectoPorId(IdProyecto) {
    return this.http.get(`${environment.API_URL}/proyecto/${IdProyecto}`, this.opciones);
  }

  eliminarProyecto(IdProyecto) {
    return this.http.delete(`${environment.API_URL}/proyecto/${IdProyecto}`);
  }
  
  editarProyecto(IdProyecto, proyecto) {
    return this.http.put(`${environment.API_URL}/proyecto/${IdProyecto}`, proyecto);
  }
  
  crearProyecto(proyecto) {
    return this.http.post(`${environment.API_URL}/proyecto`, proyecto);
}
}
