import { TestBed } from '@angular/core/testing';

import { TribunalService } from './tribunal.service';

describe('TribunalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TribunalService = TestBed.get(TribunalService);
    expect(service).toBeTruthy();
  });
});
