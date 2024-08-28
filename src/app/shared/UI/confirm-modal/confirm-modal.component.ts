import { Component, ElementRef, input, output, viewChild } from '@angular/core';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styles: ``
})
export class ConfirmModalComponent {
  modal = viewChild<ElementRef<HTMLDialogElement>>('confirmModal');
  title = input<string | null>(null);
  text = input<string | null>(null);
  id = input<string | null>(null);
  confirm = output()

  openModal() {
    this.modal()?.nativeElement.showModal();
  }

  confirmAction() {
    this.confirm.emit();
  }
}
