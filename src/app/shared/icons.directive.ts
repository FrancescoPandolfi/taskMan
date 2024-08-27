import { Directive } from '@angular/core';
import { faBars, faPlus } from '@fortawesome/free-solid-svg-icons';

@Directive({
  selector: '[appIcons]',
  standalone: true
})
export class IconsDirective {

  /***
    - Extend the directive in the component class
    - Use the FontAwesome icons in the template extending the directive
    - Example: <fa-icon [icon]="faBars"></fa-icon>
   ***/

  faPlus = faPlus;
  faBars = faBars;
}
