import { TestBed } from '@angular/core/testing';

import { WorltimeService } from './worltime.service';

describe('WorltimeService', () => {
  let service: WorltimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorltimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
