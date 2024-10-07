import { TestBed } from '@angular/core/testing';

import { MultiplesService } from './multiples.service';

describe('MultiplesService', () => {
  let service: MultiplesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiplesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
