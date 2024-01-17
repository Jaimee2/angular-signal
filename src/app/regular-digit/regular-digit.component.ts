import { CommonModule } from '@angular/common';
import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-regular-digit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regular-digit.component.html',
  styleUrl: './regular-digit.component.scss'
})
export class RegularDigitComponent {
  _digit = signal(7); //default value

  @Input() set digit(value: number) {
      this._digit.set(value);
  }

}
