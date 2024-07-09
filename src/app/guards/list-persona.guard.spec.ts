import { TestBed } from '@angular/core/testing';

import { ListPersonaGuard } from '../guards/list-persona.guard';

describe('ListPersonaGuard', () => {
  let guard: ListPersonaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ListPersonaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
