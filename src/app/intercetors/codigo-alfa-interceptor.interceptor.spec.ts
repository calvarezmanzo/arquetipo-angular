import { TestBed } from '@angular/core/testing';

import { CodigoAlfaInterceptorInterceptor } from './codigo-alfa-interceptor.interceptor';

describe('CodigoAlfaInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CodigoAlfaInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CodigoAlfaInterceptorInterceptor = TestBed.inject(CodigoAlfaInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
