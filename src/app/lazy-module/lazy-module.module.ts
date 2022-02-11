import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyModuleComponent} from './component/lazy-module.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxTuiCalendarModule} from '../../../projects/ngx-tui-calendar/src/lib/ngx-tui-calendar.module';

const routes:Routes = [
  { path: '', component: LazyModuleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    NgxTuiCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
   LazyModuleComponent
  ]
})
export class LazyModuleModule { }
