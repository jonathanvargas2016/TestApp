import { TestBed } from '@angular/core/testing';

import { AlbumsService } from '../../src/app/albums/infraestructure/albums.service';

describe('AlbumsService', () => {
  let service: AlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
