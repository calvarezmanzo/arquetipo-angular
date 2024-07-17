import { Injectable } from '@angular/core';
import { Token } from '../interfaces/token';
import { Usuarios } from '../interfaces/usuarios';
/* import jwt_decode from 'jwt-decode'; */




const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  constructor() { }

  private generate_token = (token: string): void => window.sessionStorage.setItem(TOKEN_KEY, token);
  private generate_user = (user: Usuarios): void => window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  private remove_token = (): void => window.sessionStorage.removeItem(TOKEN_KEY);
  private remove_user = (): void => window.sessionStorage.removeItem(USER_KEY);


  /* decode el token y lo decodifica */
  private decode(token: string): Token {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error decoding token:', error);
      return {} as Token;
    }
  }

  public getToken = (): string | null => window.sessionStorage.getItem(TOKEN_KEY);

  /* Obtiene los datos del usuario */
  public getUsers(): Usuarios {
    const token = window.sessionStorage.getItem(TOKEN_KEY) || '';
    return this.decode(token).data
  }

  /* Guarda el token y el usuario en el sessionStorage */
  public saveTokens = (token: string): void => {
    const usuario: Usuarios = this.decode(token).data;
    this.generate_token(token);
    this.generate_user(usuario);
  }

  /* Elimina el token y el usuario del sessionStorage */
  public signOut = (): void => {
    this.remove_token();
    this.remove_user();
  }
}
