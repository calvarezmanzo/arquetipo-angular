import { TestBed } from '@angular/core/testing';

import { SavePersonaGuard } from '../guards/save-persona.guard';

describe('SavePersonaGuard', () => {
  let guard: SavePersonaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SavePersonaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
