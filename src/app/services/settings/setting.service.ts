import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  userSettings: Settings = {
    urlTheme: 'assets/css/colors/default.css',
    themeName: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    localStorage.setItem('settings', JSON.stringify(this.userSettings));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
      this.userSettings = JSON.parse(localStorage.getItem('settings'));
      this.applyColorScheme(this.userSettings.themeName);
    } else {
      this.applyColorScheme(this.userSettings.themeName);
    }
  }

  applyColorScheme(colorScheme: string) {
    const themeUrl = `assets/css/colors/${colorScheme}.css`
    this._document.getElementById('theme').setAttribute('href',  themeUrl);

    this.userSettings.themeName = colorScheme;
    this.userSettings.urlTheme = themeUrl;
    this.saveSettings();
  }

}

interface Settings {
  urlTheme: string;
  themeName: string;
}
