import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {


  /***
    - To change the theme of the application, use the setTheme method
    - Example: this.themeService.setTheme
   ***/

  setTheme(theme: string) {
    const html = document.querySelector('html');
    if (html) {
      html.setAttribute('data-theme', theme);
    }
  }

}
