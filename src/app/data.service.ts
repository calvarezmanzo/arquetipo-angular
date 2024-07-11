import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  savePerson(usuario: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(`${this.apiUrl}/savePersona`, usuario, { headers });
  }
}
