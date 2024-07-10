import { TestBed } from '@angular/core/testing';

import { CodigoAlfaServiceService } from './codigo-alfa-service.service';

describe('CodigoAlfaServiceService', () => {
  let service: CodigoAlfaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodigoAlfaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
