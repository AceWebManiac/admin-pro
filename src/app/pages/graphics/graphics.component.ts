import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphics.component.html'
})
export class GraphicsComponent {
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
}
