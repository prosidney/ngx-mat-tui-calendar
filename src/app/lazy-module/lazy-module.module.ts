import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyModuleComponent} from './component/lazy-module.component';
import {RouterModule, Routes} from '@angular/router';
import {NgxTuiCalendarModule} from 'ngx-tui-calendar';

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
