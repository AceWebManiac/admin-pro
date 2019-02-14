import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doughnut',
  templateUrl: './graphic-doughnut.component.html'
})
export class GraphicDoughnutComponent {
  @Input() public chartLabels: string[] = [];
  @Input() public chartData: number[] = [];
  @Input() public chartType: string = '';
}
