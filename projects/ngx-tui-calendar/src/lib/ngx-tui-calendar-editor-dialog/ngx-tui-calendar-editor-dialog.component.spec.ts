import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxTuiCalendarEditorDialogComponent } from './ngx-tui-calendar-editor-dialog.component';

describe('NgxMatTuiCalendarEditorDialogComponent', () => {
  let component: NgxTuiCalendarEditorDialogComponent;
  let fixture: ComponentFixture<NgxTuiCalendarEditorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxTuiCalendarEditorDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxTuiCalendarEditorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
