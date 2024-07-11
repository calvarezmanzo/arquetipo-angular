import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private apiUrl = 'https://www.codigo-alfa.cl/aglo/Angular'; // URL base

  constructor(private http: HttpClient) { }

  getListPersona(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/listPersona`);
  }

  savePerson(nombre: string, apellidos: string, urlLinkedin: string): Observable<any> {
    const body = { Nombre: nombre, Apellidos: apellidos, URLLinkedin: urlLinkedin };
    return this.http.post<any>(`${this.apiUrl}/savePerson`, body);
  }
}
