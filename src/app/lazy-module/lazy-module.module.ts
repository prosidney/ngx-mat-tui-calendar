import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyModuleComponent} from './component/lazy-module.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxMatTuiCalendarModule} from '../../../projects/ngx-mat-tui-calendar/src/lib/ngx-mat-tui-calendar.module';

const routes:Routes = [
  { path: '', component: LazyModuleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    NgxMatTuiCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
   LazyModuleComponent
  ]
})
export class LazyModuleModule { }
