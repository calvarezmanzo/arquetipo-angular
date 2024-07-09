import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  private baseUrl = 'https://www.codigo-alfa.cl/aglo/Angular';
  private nextId = 1; // Inicializa el ID contador

  constructor(private http: HttpClient) {}

  savePersona(persona: any): Observable<any> {
    persona.id = this.nextId++; 
    return this.http.post(`${this.baseUrl}/savePersona`, persona);
  }

  listPersonas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/listPersona`).pipe(
      map((response: any) => response.personas));
  }
}
