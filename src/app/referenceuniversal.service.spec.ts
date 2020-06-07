import { TestBed } from '@angular/core/testing';

import { ReferenceuniversalService } from './referenceuniversal.service';

describe('ReferenceuniversalService', () => {
  let service: ReferenceuniversalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReferenceuniversalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
