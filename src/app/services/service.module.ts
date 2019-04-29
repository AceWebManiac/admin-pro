import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingService } from './index.service';
import { SidebarService } from './index.service';
import { SharedService} from './index.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingService,
    SidebarService,
    SharedService
  ]
})
export class ServiceModule { }
