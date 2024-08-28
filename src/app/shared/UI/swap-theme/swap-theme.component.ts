import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { Themes } from '../../../core/models';

@Component({
  selector: 'app-swap-theme',
  standalone: true,
  imports: [],
  templateUrl: './swap-theme.component.html',
  styles: ``
})
export class SwapThemeComponent {

  themeService = inject(ThemeService);

  swapTheme(checkboxRef: HTMLInputElement) {
    if (checkboxRef.checked) {
      this.themeService.setTheme(Themes.nord)
    } else {
      this.themeService.setTheme(Themes.dracula)
    }
  }
}
