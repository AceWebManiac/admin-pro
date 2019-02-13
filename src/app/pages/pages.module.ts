import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRouting } from './pages-routing';
import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    PagesComponent,
    GraphicsComponent,
    ProgressComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    PagesRouting,
    SharedModule
  ]
})
export class PagesModule { }
