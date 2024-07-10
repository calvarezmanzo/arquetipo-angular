import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private http: HttpClient) {}
  obtenerUsuarios() {
    return this.http.get("https://www.codigo-alfa.cl/aglo/Angular/listPersona");
  }
}
