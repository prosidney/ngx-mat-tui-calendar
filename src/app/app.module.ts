// Angular modules
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

// Angular Material Design modules
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

// 3rd party modules
import {NgxMatTuiCalendarModule} from 'ngx-mat-tui-calendar';

// project modules
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import {LazyModuleComponent} from './lazy-module/component/lazy-module.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule)
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LazyModuleComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    MatIconModule,
    MatToolbarModule,

    NgxMatTuiCalendarModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
