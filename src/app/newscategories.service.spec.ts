import { TestBed } from '@angular/core/testing';

import { NewscategoriesService } from './newscategories.service';

describe('NewscategoriesService', () => {
  let service: NewscategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewscategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
