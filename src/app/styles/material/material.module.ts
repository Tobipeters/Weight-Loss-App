import {
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
//   import {
//     MatMomentDateModule,
//     MAT_MOMENT_DATE_ADAPTER_OPTIONS,
//   } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

//   used
import { MatProgressBarModule } from '@angular/material/progress-bar';

export const DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const material = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule,
  MatRippleModule,
  MatTabsModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatMenuModule,
  MatSnackBarModule,
  MatChipsModule,
  MatAutocompleteModule,

  MatProgressBarModule,
];

@NgModule({
  imports: [material],
  exports: [material],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    /**By default the MomentDateAdapter creates dates in your time zone specific locale.
     *  You can change the default behaviour to parse dates as UTC
     *  by providing the MAT_MOMENT_DATE_ADAPTER_OPTIONS and setting it to useUtc: true.**/
    //   { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    /*************************************************************************************/

    /************************To use custom date format************************/
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    /*************************************************************************/
  ],
})
export class MaterialModule {}
