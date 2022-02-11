// Angular modules
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

// Angular Material Design modules
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

// 3rd party modules
import {NgxTuiCalendarModule} from 'ngx-tui-calendar';

// project modules
import {AppComponent} from './app.component';
import {MainComponent} from './main/main.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


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
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatIconModule,
    MatToolbarModule,

    NgxTuiCalendarModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
