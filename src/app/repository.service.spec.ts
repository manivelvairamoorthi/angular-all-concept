import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RepositoryService } from './repository.service';

describe('RepositoryService', () => {
  let service: RepositoryService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(RepositoryService);
  // });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],

    }).compileComponents();
    service = TestBed.inject(RepositoryService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
