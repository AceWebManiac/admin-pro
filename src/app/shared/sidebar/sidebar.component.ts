import { Component } from '@angular/core';
import { SidebarService } from '../../services/index.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  constructor(public _sidebar: SidebarService) { }
}
