import { TestBed } from '@angular/core/testing';

import { GitDatInfoService } from './git-dat-info.service';

describe('GitDatInfoService', () => {
  let service: GitDatInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitDatInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
