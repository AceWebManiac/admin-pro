import { Component, OnInit } from '@angular/core';
import { SettingService } from '../../services/index.service';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styles: []
})
export class AccountSettingComponent implements OnInit {

  constructor(private settingsService: SettingService) { }

  onChangeColor(colorScheme: string, link: any) {
    this.applyCheck(link);
    this.settingsService.applyColorScheme(colorScheme);
  }

  applyCheck(link: any) {
    const selectors: any = document.getElementsByClassName('selector');
    for (const ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  loadCheck() {
    const selectors: any = document.getElementsByClassName('selector');
    const theme = this.settingsService.userSettings.themeName;
    for (const ref of selectors) {
      if (ref.getAttribute('data-theme') === theme) {
        ref.classList.add('working');
      }
    }
  }

  ngOnInit() {
    this.loadCheck();
  }

}
