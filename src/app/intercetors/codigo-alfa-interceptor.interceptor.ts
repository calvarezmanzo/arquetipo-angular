import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CodigoAlfaInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const url= 'https://www.codigo-alfa.cl/aglo/Angular/';
    const completeUrl = `${url}${request.url}`
    const modifiedReq = request.clone({
      url: completeUrl
    });
    return next.handle(modifiedReq);
  }
}
