import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class SavePersonaInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401)
          return throwError('Este usuario no tiene credenciales validas');
        else if (error.status === 403)
          return throwError('Acceso restringido');
        else if (error.status === 404)
          return throwError('Pagina no encontrada');
        else
          return throwError('Upss!! Ha ocurrido un error inesperado');

      }),
    );
  }
}
