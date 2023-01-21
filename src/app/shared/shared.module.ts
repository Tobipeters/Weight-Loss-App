import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../styles/material/material.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { HeaderComponent } from './header/header.component';
import { AnalyticChartComponent } from './analytic-chart/analytic-chart.component';
import { MenuPopupComponent } from './menu-popup/menu-popup.component';
import { AddWeightComponent } from './add-weight/add-weight.component';

const modules = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  MaterialModule,
  NgApexchartsModule,
  RouterModule,
];

const components = [
  MobileNavbarComponent,
  HeaderComponent,
  AnalyticChartComponent,
  MenuPopupComponent,
];

@NgModule({
  declarations: [components, AddWeightComponent],
  imports: [modules],
  exports: [modules, components],
})
export class SharedModule {}
