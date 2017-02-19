import {Component, OnInit, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Backer} from "../model/backer";
import {IndiegogoService} from "../services/indiegogo.service";


@Component({
  selector: 'backers',
  templateUrl: 'backers.component.html'
})
export class BackersComponent implements OnInit {
  private backers: Backer[];

  constructor(private indiegogoService: IndiegogoService) {
  }

  public barChartOptions: any = {

    scaleShowVerticalLines: false,
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: '#73879c',
      borderColor: '#73879c',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#4b57ff',
      pointHoverBackgroundColor: '#0f19ff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartDatas: number[] = [];
  public barChartData: any[] = [
    {data: this.backers, label: 'Series A'},

  ];

  ngOnInit(): void {
    this.indiegogoService.getBackers(21858).then((res => {
      console.log("joe1");
      this.backers = res;

      this.backers.map((value) => {
        console.log(value);
        this.barChartLabels.push(value.by);
        this.barChartDatas.push(value.amount);
      });
      this.barChartData = [
        {data: this.barChartDatas, label: 'Series A'}];

      console.log("joe2");
    }));
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
}
