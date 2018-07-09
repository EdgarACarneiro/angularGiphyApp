import { TestBed, inject } from '@angular/core/testing';

import { GiphyAPIService } from './giphy-api.service';

describe('GiphyAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiphyAPIService]
    });
  });

  it('should be created', inject([GiphyAPIService], (service: GiphyAPIService) => {
    expect(service).toBeTruthy();
  }));
});
