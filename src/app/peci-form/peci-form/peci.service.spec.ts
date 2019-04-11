import { TestBed } from '@angular/core/testing';

import { PeciService } from './peci.service';

describe('PeciService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeciService = TestBed.get(PeciService);
    expect(service).toBeTruthy();
  });
});
