import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://api.example.com/auth'; // Cambia esto por tu URL de API real
  private tokenPrueba = "hola123"

  constructor(private http: HttpClient) { }

  login(credentials: { email: string, password: string }): Observable<boolean> {
    
    localStorage.setItem('token', this.tokenPrueba);
    return of(true);

    // return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials).pipe(
    //   map(response => {
    //     localStorage.setItem('token', response.token);
    //     return true;
    //   }),
    //   catchError(() => of(false))
    // );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
