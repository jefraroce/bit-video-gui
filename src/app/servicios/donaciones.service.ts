import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DonacionesService {

    private opciones = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlY2YyMzU3ZmVhODY1NDI1ZDUyNzIyNiIsIm5vbWJyZSI6IlNhbXkiLCJmZWNoYURlRXhwaXJhY2lvbiI6MTU5MTE0NDA3OH0.C4m_4DoxHgZeJktzPQhtpjDaXG5XG9U3n6Cp6vG9GL4'
      })
    }
  constructor(private http: HttpClient) { }

  traerDonacionPorId(IdDonacion) {
    return this.http.get(`${environment.API_URL}/donacion/${IdDonacion}`, this.opciones);
  }
  traerDonaciones(parametros = {}) {
    return this.http.get(`${environment.API_URL}/donacion`,{params: parametros});
  }

  eliminarDonacion(IdDonacion) {
    return this.http.delete(`${environment.API_URL}/donacion/${IdDonacion}`);
  }
  
  editarDonacion(IdDonacion, donacion) {
    return this.http.put(`${environment.API_URL}/donacion/${IdDonacion}`, donacion);
  }
  
  crearDonacion(donacion) {
    return this.http.post(`${environment.API_URL}/donacion`, donacion);
    }
}
