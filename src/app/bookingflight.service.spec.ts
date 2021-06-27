import { TestBed } from '@angular/core/testing';

import { BookingflightService } from './bookingflight.service';

describe('BookingflightService', () => {
  let service: BookingflightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingflightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
