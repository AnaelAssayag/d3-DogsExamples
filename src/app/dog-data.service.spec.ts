import { TestBed, inject } from '@angular/core/testing';

import { DogDataService } from './dog-data.service';

describe('DogDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogDataService]
    });
  });

  it('should be created', inject([DogDataService], (service: DogDataService) => {
    expect(service).toBeTruthy();
  }));
});
