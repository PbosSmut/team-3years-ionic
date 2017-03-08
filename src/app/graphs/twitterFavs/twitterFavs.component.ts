import {Component, OnInit, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {TwitterData} from "../../model/twitter/twitterData";

@Component({
  selector: 'twitterFavs',
  templateUrl: 'twitterFavs.component.html',

})
export class TwitterFavsComponent implements OnInit {
  @Input()
  twitterData: TwitterData[];

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

  ngOnInit(): void {
    //make array disctinct and take the last value as true value
    let temptwitterData: TwitterData[] = [];
    temptwitterData.push(this.twitterData[0]);
    let j = 0;
    for (let i = 0; i < this.twitterData.length; i++) {
      if (temptwitterData[j].text == this.twitterData[i].text) {
        temptwitterData.splice(j, 1, this.twitterData[i]);
      } else {
        temptwitterData.push(this.twitterData[i]);
        j++;
      }
    }
    this.twitterData = temptwitterData;
    this.twitterData.filter(tweet => (!tweet.text.startsWith('@'))).map((value) => {
      let newDate = new Date(value.timestamp);
      let newmonth = newDate.getMonth() + 1;
      let label = newDate.getDate() + '/' + newmonth + '/' + newDate.getFullYear();
      this.lineCharDatasLike.push(value.amtFavsLastPost);
      if (this.lineChartLabels.indexOf(label) == -1) {
        this.lineChartLabels.push(label);
      } else {
        this.lineChartLabels.push('');
      }
    });
    this.lineChartData = [
      {data: this.lineCharDatasLike, label: 'Favourites on tweet'}
    ];
  }
}
