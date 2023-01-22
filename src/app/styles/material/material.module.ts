import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';

const material = [
  MatIconModule,
  MatDialogModule,
  MatProgressBarModule,
  MatSliderModule,
];

@NgModule({
  imports: [material],
  exports: [material],
  providers: [],
})
export class MaterialModule {}
