import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SesionGuardGuard implements CanActivate {
  router = inject(Router)
  canActivate(): boolean | UrlTree {
    if(localStorage.getItem('loggued')){
      return true;  
    }
    return this.router.createUrlTree(['/login']);
  }
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if(localStorage.getItem('loggued')){
  //     return true;
  //   }
  //   return false;
  // }
}
