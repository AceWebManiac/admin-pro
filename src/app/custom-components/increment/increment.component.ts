import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html'
})
export class IncrementComponent {
  @ViewChild('txtPercentage') txtPercentage: ElementRef;

  @Input() caption: string = 'Caption';
  @Input() percentage: number = 50;

  @Output() changePercentage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.percentage = 100;
    } else if (newValue <= 0) {
      this.percentage = 0;
    } else {
      this.percentage = newValue;
    }
    this.txtPercentage.nativeElement.value = this.percentage;

    this.changePercentage.emit(this.percentage);
  }

  changeValue(value: number): void {
    if (this.percentage >= 100 && value > 0) {
      this.percentage = 100;
      return;
    }
    if (this.percentage <= 0 && value < 0) {
      this.percentage = 0;
      return;
    }

    this.percentage = this.percentage + value;
    this.changePercentage.emit(this.percentage);
    this.txtPercentage.nativeElement.focus();
  }
}
