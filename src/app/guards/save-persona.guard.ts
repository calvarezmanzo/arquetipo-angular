import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SavePersonaGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.comprobarUser()){
      return true;
    }

    alert('Este usuario no tiene permisos')
    return false;
  }


  comprobarUser(): boolean{
    return false;
  }
  
}
