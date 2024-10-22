import { TestBed } from '@angular/core/testing';

import { ApiRandomUserService } from './api-random-user.service';

describe('ApiRandomUserService', () => {
  let service: ApiRandomUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRandomUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
