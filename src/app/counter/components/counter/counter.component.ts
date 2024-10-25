import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button (click)="decreaseBy()">-1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="increaseBy()">+1</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number = 1): void {
    this.counter = this.counter + value;
  }
  decreaseBy(value: number = 1): void {
    if (this.counter - value < 0) return;
    this.counter -= value;
  }
  reset(): void {
    this.counter = 10;
  }
}
