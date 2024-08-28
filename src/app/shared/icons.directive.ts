import { Directive } from '@angular/core';
import { faBars, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Directive({
  selector: '[appIcons]',
  standalone: true
})
export class IconsDirective {

  /***
    - To use icons in your component extend the directive in the component class
    - Then you can use the icons in the template like this:
    - Example: <fa-icon [icon]="faBars"></fa-icon>
   ***/

  faPlus = faPlus;
  faBars = faBars;
  faPen = faPen;
  faTrash = faTrash;
}
