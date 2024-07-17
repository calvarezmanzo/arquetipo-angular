import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosLogin } from '../interfaces/usuarios';


@Injectable({
  providedIn: 'root'
})
export class IngresarServiceService {

  constructor( private _http: HttpClient ) { }

  private url = 'https://www.codigo-alfa.ccl/aglo/Angular/listPersona';
  private urlSave = 'https://www.codigo-alfa.ccl/aglo/Angular/savePersona';

  /* Ingresar al sistema */
  public submitIngreso = ({ email, password }: UsuariosLogin): Observable<any> => this._http.post(this.url, { email, password });

  /* Guardar usuario */
  public saveIngreso = (user: any): Observable<any> => this._http.post(this.urlSave, user);
}
