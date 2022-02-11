import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngx-tui-calendar-wrapper',
  templateUrl: './ngx-tui-calendar-wrapper.component.html',
  styleUrls: ['./ngx-tui-calendar-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None,  // this is needed so that our css rules override those in tui-calendar package
})
export class NgxTuiCalendarWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
