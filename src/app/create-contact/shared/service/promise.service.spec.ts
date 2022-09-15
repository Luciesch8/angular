import { TestBed } from '@angular/core/testing';

import { PromiseService } from './promise.service';

describe('HttpService', () => {
  let service: PromiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
