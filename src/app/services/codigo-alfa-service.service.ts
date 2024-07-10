import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodigoAlfaServiceService {

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any>{
    const option = 'listPersona';
    return this.http.get(option);
  }
  savePersona(body:any):Observable<any>{
    const option = 'savePersona';
    return this.http.post(option,body)
  }
}
