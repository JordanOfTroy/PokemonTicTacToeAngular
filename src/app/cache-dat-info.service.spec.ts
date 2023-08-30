import { TestBed } from '@angular/core/testing';

import { CacheDatInfoService } from './cache-dat-info.service';

describe('CacheDatInfoService', () => {
  let service: CacheDatInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheDatInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
