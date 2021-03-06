import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesRouting } from './pages-routing';
import { SharedModule } from '../shared/shared.module';
import { CustomComponentsModule } from '../custom-components/custom-components.module';

import { PagesComponent } from './pages.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { ProgressComponent } from './progress/progress.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    PagesComponent,
    GraphicsComponent,
    ProgressComponent,
    DashboardComponent,
    AccountSettingComponent
  ],
  imports: [
    CustomComponentsModule,
    CommonModule,
    FormsModule,
    PagesRouting,
    RouterModule,
    SharedModule
  ]
})
export class PagesModule { }
