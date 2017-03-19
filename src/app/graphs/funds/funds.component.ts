import {Component, OnInit, Input} from "@angular/core";
import "rxjs/add/operator/switchMap";
import {IndiegogoData} from "../../model/indiegogo/indiegogoData";

@Component({
  selector: 'funds',
  templateUrl: 'funds.component.html'
})

export class FundsComponent implements OnInit {
  @Input()
  indiegogoData: IndiegogoData[];

  constructor() {
  }

  public lineChartColors: Array<any> = [
    { // grey
      //backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey

      //backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      //backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  // lineChart
  public lineChartData: Array<any> = [];
  public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true,
    scaleShowVerticalLines: false
  };
  public lineChartLegend: boolean = false;
  public lineChartType: String = 'line';
  public lineCharDatasCollected: number[] = [];
  public lineChartDatasGoal: number[] = [];


  ngOnInit() {
    this.indiegogoData.map((value) => {
      this.lineCharDatasCollected.push(value.fund.collected_funds);
      this.lineChartDatasGoal.push(value.fund.goal);
      let newDate = new Date(value.timestamp);
      let newMonth = newDate.getMonth() + 1;
      let label = newDate.getDate() + '/' + newMonth + '/' + newDate.getFullYear();

      if (this.lineChartLabels.indexOf(label) == -1) {
        this.lineChartLabels.push(label);
      } else {
        this.lineChartLabels.push('');
      }
    });

    this.lineChartData = [
      {data: this.lineCharDatasCollected, label: 'Funds Collected'},
      {data: this.lineChartDatasGoal, label: 'Fund Goal'}
    ];
  }
}
