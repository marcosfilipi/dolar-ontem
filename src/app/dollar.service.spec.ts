import { TestBed } from '@angular/core/testing';

import { DollarService } from './dollar.service';

describe('DollarService', () => {
  let service: DollarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DollarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
