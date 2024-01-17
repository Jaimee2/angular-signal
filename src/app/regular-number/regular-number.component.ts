import { Component, Input, computed, signal } from '@angular/core';
import { RegularDigitComponent } from '../regular-digit/regular-digit.component';

@Component({
  selector: 'app-regular-number',
  standalone: true,
  imports: [RegularDigitComponent],
  templateUrl: './regular-number.component.html',
  styleUrl: './regular-number.component.scss'
})
export class RegularNumberComponent {

  _number = signal(0);

  @Input() set number(value: number) {
    this._number.set(value);
  }

  first = computed(() => this._number() % 10);
  second = computed(() => Math.floor(this._number() / 10) % 10);
  third = computed(() => Math.floor(this._number() / 100) % 10);
  fourth = computed(() => Math.floor(this._number() / 1000) % 10);
}
