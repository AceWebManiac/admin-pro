import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { IncrementComponent } from './increment/increment.component';

@NgModule({
  declarations: [
    IncrementComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    IncrementComponent
  ]
})
export class CustomComponentsModule { }
