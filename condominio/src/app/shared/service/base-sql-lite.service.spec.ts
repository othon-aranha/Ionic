import { TestBed } from '@angular/core/testing';

import { BaseSqlLiteService } from './base-sql-lite.service';

describe('BaseSqlLiteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BaseSqlLiteService = TestBed.get(BaseSqlLiteService);
    expect(service).toBeTruthy();
  });
});
