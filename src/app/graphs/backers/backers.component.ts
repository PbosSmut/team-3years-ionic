import {Component, OnInit, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Backer} from "../../model/indiegogo/backer";
import {IndiegogoService} from "../../services/indiegogo.service";


@Component({
  selector: 'backers',
  templateUrl: 'backers.component.html'
})
export class BackersComponent implements OnInit {

  @Input()
  backers: Backer[];


  constructor() {
  }

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0}}]
    }
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: '#73879c',
      borderColor: '#73879c',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartDatas: number[] = [];
  public barChartData: any[] = [
    {data: this.backers},
  ];

  ngOnInit(): void {
        this.backers
        .sort((b1,b2) => b2.amount - b1.amount)
        .slice(0,5)
        .map((value) => {
          this.barChartLabels.push(value.by);
          this.barChartDatas.push(value.amount);
        });

      this.barChartData = [
        {data: this.barChartDatas, label: 'Aantal'}];
    }
  }

