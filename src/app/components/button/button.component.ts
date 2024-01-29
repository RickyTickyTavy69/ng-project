import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [
    UpperCasePipe
  ],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() title: string;

  @Output() buttonClicked = new EventEmitter<void>();
  click(){
    this.buttonClicked.emit();
  }
}
