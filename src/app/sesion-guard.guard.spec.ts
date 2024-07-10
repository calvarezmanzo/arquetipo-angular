import { TestBed } from '@angular/core/testing';

import { SesionGuardGuard } from './sesion-guard.guard';

describe('SesionGuardGuard', () => {
  let guard: SesionGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SesionGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
