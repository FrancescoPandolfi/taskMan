import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() {
    this.setTheme('business');
  }

  setTheme(theme: string) {
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', theme);
    }
  }
}
