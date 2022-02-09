import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyModuleComponent} from './component/lazy-module.component';
import {RouterModule, Routes} from '@angular/router';

const routes:Routes = [
  { path: '', component: LazyModuleComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyModuleComponent
  ]
})
export class LazyModuleModule { }
