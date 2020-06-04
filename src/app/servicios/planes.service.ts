import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PlanesService {

    private opciones = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVlY2YyMzU3ZmVhODY1NDI1ZDUyNzIyNiIsIm5vbWJyZSI6IlNhbXkiLCJmZWNoYURlRXhwaXJhY2lvbiI6MTU5MTE0NDA3OH0.C4m_4DoxHgZeJktzPQhtpjDaXG5XG9U3n6Cp6vG9GL4'
      })
    }
  constructor(private http: HttpClient) { }

  traerPlanesPorId(IdProyecto) {
    return this.http.get(`${environment.API_URL}/plan/${IdProyecto}`, this.opciones);
  }
}
