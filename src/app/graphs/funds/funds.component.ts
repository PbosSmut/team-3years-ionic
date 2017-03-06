import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {forEach} from "@angular/router/src/utils/collection";
import {FundDetails} from "../../model/fundDetails";
import {IndiegogoService} from "../../services/indiegogo.service";

@Component({
  selector: 'funds',
  templateUrl: './funds.component.html'
})

export class FundsComponent implements OnInit {
  private fundDetails: FundDetails[];

  constructor(private indiegogoService: IndiegogoService) {
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
    this.indiegogoService.getFundDetailsFromDb(21858).then((res => {
      this.fundDetails = res;
      this.fundDetails.map((value) => {
        this.lineCharDatasCollected.push(value.response.collected_funds);
        this.lineChartDatasGoal.push(value.response.goal);
        let datestring = new Date(value.date).toLocaleDateString();
        if (this.lineChartLabels.indexOf(datestring) == -1) {
          this.lineChartLabels.push(datestring);
        } else {
          this.lineChartLabels.push('');
        }
      });

      this.lineChartData = [
        {data: this.lineCharDatasCollected, label: 'Funds Collected'},
        {data: this.lineChartDatasGoal, label: 'Fund Goal'}
      ];
    }));
  }
}
