// Angular modules
import {CommonModule} from '@angular/common';
import {FlexLayoutModule, FlexModule} from '@angular/flex-layout';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule} from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';

// Angular Material Design modules
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatToolbarModule} from '@angular/material/toolbar';

// 3rd party modules
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MatTimepickerModule} from 'mat-timepicker';
// project modules
import {NgxTuiCalendarComponent} from './ngx-tui-calendar.component';
import {NgxTuiCalendarWrapperComponent} from './ngx-tui-calendar-wrapper/ngx-tui-calendar-wrapper.component';
import {
    NgxTuiCalendarEditorDialogComponent
} from './ngx-tui-calendar-editor-dialog/ngx-tui-calendar-editor-dialog.component';

// collect all of the above modules into an array
const importedModules = [
    CommonModule,
    FlexLayoutModule,
    FlexModule, 
    FormsModule,
    HttpClientModule,
    OverlayModule,
    ReactiveFormsModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatRippleModule,
    MatSlideToggleModule,
    MatToolbarModule,

    FontAwesomeModule,
    MatTimepickerModule,
  ];


const projectModules = [
    NgxTuiCalendarComponent,
    NgxTuiCalendarWrapperComponent,
    NgxTuiCalendarEditorDialogComponent,
];


@NgModule({
  declarations: [
    ...projectModules,
  ],
  imports: [
    ...importedModules,
  ],
  exports: [
    ...importedModules,

    ...projectModules,
  ],
  entryComponents: [
    ...projectModules,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class NgxTuiCalendarModule {
    static forRoot(): ModuleWithProviders<NgxTuiCalendarModule> {
        return {
            ngModule: NgxTuiCalendarModule,
            providers: [ ]
        }
    }
}
