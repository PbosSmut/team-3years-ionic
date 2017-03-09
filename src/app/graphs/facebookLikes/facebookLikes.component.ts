import {FacebookData} from "../../model/facebook/facebookData";
import {Input, OnInit, Component} from "@angular/core";
/**
 * Created by De Bièvre on 6-3-2017.
 */

@Component({
  selector: 'facebookLikes',
  templateUrl: './facebookLikes.component.html',
})

export class FacebookLikesComponent implements OnInit {

  @Input()
  facebookData: FacebookData[];

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
  public lineChartOptions: any = {responsive: true, scaleShowVerticalLines: false};
  public lineChartLegend: boolean = true;
  public lineChartType: String = 'line';
  public lineCharDatasLike: number[] = [];

  ngOnInit(): void {
    this.facebookData.map((value) => {
      this.lineCharDatasLike.push(value.pageInfo.amtPageLikes);
      console.log(value.pageInfo.amtPageLikes);
      let newDate = new Date(value.timestamp);
      let label = newDate.getDate() + '/' + newDate.getMonth() + 1 + '/' + newDate.getFullYear();
      if (this.lineChartLabels.indexOf(label) == -1) this.lineChartLabels.push(label);
      else this.lineChartLabels.push('');
      this.lineChartData = [{data: this.lineCharDatasLike, label: 'Pagelikes'}];
    });
  }
}
