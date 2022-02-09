import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
describe('ServiceService', () => {
  let service: ServiceService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(ServiceService);
  // });
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        HttpClientModule
      ],

    }).compileComponents();
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
