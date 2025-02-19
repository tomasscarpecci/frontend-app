import { TestBed } from '@angular/core/testing';

import { EditorialsService } from './editorials.service';

describe('EditorialsService', () => {
  let service: EditorialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
