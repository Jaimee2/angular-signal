import { Component, Input, OnInit, computed, signal } from '@angular/core';
import { SevenSegmentDigitComponent } from '../seven-segment-digit/seven-segment-digit.component';

@Component({
  selector: 'app-seven-segment-number',
  standalone: true,
  imports: [SevenSegmentDigitComponent],
  templateUrl: './seven-segment-number.component.html',
  styleUrl: './seven-segment-number.component.scss'
})
export class SevenSegmentNumberComponent implements OnInit {
  first = computed(() => this._number() % 10);
  second = computed(() => Math.floor(this._number() / 10) % 10);
  third = computed(() => Math.floor(this._number() / 100) % 10);
  fourth = computed(() => Math.floor(this._number() / 1000) % 10);

  ngOnInit(): void {
    console.log("first element is: " + this.first())
    console.log("first element is: " + this.second())
    console.log("first element is: " + this.third())
    console.log("first element is: " + this.fourth())
  }
  _number = signal(9999);

  @Input() set number(value: number) {
    console.log("Value: " + value)
    this._number.set(value);
  }

}
