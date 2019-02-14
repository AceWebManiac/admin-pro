import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { IncrementComponent } from './increment/increment.component';
import { GraphicDoughnutComponent } from './graphic/graphic-doughnut.component';

@NgModule({
  declarations: [
    IncrementComponent,
    GraphicDoughnutComponent
  ],
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    IncrementComponent,
    GraphicDoughnutComponent
  ]
})
export class CustomComponentsModule { }
