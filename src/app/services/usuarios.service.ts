import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  
  private url : string ="https://www.codigo-alfa.cl/aglo/Angular/listPersona"
  private urlSave: string = "https://www.codigo-alfa.cl/aglo/Angular/savePersona";

  constructor(private http: HttpClient) {}

  public obtenerUsuarios(): Observable<any>{
    return this.http.get<any>(this.url)
  }

  public guardarUsuario(usuario: any): Observable<any> {
    return this.http.post<any>(this.urlSave, usuario);
  }
}