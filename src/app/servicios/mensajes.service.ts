import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {

  constructor(private http: HttpClient) { }

  crearMensaje(mensaje) {
    return this.http.post(`${environment.API_URL}/mensaje`, mensaje);
  }
}