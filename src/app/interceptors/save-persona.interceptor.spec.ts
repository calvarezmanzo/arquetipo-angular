import { TestBed } from '@angular/core/testing';

import { SavePersonaInterceptor } from '../interceptors/save-persona.interceptor';

describe('SavePersonaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SavePersonaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SavePersonaInterceptor = TestBed.inject(SavePersonaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
