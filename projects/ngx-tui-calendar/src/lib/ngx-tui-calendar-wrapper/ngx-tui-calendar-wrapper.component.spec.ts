import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTuiCalendarWrapperComponent } from './ngx-tui-calendar-wrapper.component';

describe('NgxMatTuiCalendarWrapperComponent', () => {
  let component: NgxTuiCalendarWrapperComponent;
  let fixture: ComponentFixture<NgxTuiCalendarWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTuiCalendarWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTuiCalendarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
