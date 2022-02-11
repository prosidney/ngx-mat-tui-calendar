import { TestBed } from '@angular/core/testing';

import { NgxTuiCalendarService } from './ngx-tui-calendar.service';

describe('NgxMatTuiCalendarService', () => {
  let service: NgxTuiCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTuiCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
