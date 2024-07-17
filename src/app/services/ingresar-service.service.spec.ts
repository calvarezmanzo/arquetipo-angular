import { TestBed } from '@angular/core/testing';

import { IngresarServiceService } from './ingresar-service.service';

describe('IngresarServiceService', () => {
  let service: IngresarServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngresarServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
