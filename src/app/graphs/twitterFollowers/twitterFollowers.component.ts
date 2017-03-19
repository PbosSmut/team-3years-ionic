import {Component, OnInit, Input} from "@angular/core";
import "rxjs/add/operator/switchMap";
import {TwitterData} from "../../model/twitter/twitterData";

@Component({
  selector: 'twitterFollowers',
  templateUrl: 'twitterFollowers.component.html',
})

export class TwitterFollowersComponent implements OnInit {
  @Input()
  private twitterData: TwitterData[];

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
  public lineChartLegend: boolean = true;
  public lineChartType: String = 'line';
  public lineCharDatasLike: number[] = [];


  ngOnInit() {
    this.twitterData.map((value) => {
      this.lineCharDatasLike.push(value.amtFollowers);
      let newDate = new Date(value.timestamp);
      let newmonth = newDate.getMonth() + 1;
      let label = newDate.getDate() + '/' + newmonth + '/' + newDate.getFullYear();
      if (this.lineChartLabels.indexOf(label) == -1) {
        this.lineChartLabels.push(label);
      } else {
        this.lineChartLabels.push('');
      }
    });

    this.lineChartData = [
      {data: this.lineCharDatasLike, label: 'Followers amount'}
    ];
  }
}

