import { TestBed, inject } from '@angular/core/testing';

import { FavouriteBooksStorageService } from './favourite-books-storage.service';

describe('FavouriteBooksStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavouriteBooksStorageService]
    });
  });

  it('should be created', inject([FavouriteBooksStorageService], (service: FavouriteBooksStorageService) => {
    expect(service).toBeTruthy();
  }));
});
