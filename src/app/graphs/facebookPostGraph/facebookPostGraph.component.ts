/**
 * Created by De Bièvre on 9-3-2017.
 */

import {Component, OnInit, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {FacebookData} from "../../model/facebook/facebookData";

@Component({
  selector: 'facebookPostGraph',
  templateUrl: 'facebookPostGraph.component.html'
})


export class FacebookPostGraph implements OnInit {

  @Input()
  facebookData: FacebookData[];

  constructor() {

  }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[]=[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartDatas: number[]=[];
  public barChartData:any[] = [
    {data: this.facebookData, label: 'blabla'},
  ];
  public barChartColors:Array<any> = [
    { // grey
      backgroundColor: '#73879c',
      borderColor: '#73879c',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#4b57ff',
      pointHoverBackgroundColor: '#0f19ff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  ngOnInit(): void {
    let lastindex = this.facebookData.length-1;
    this.barChartLabels.push("# comments: " + this.facebookData[lastindex].pageInfo.totAmtCommentsOnPosts);
    this.barChartDatas.push(this.facebookData[lastindex].pageInfo.totAmtCommentsOnPosts);
    this.barChartLabels.push("# shares: " + this.facebookData[lastindex].pageInfo.totAmtSharesOnPosts);
    this.barChartDatas.push(this.facebookData[lastindex].pageInfo.totAmtSharesOnPosts);
    this.barChartLabels.push("# likes: " + this.facebookData[lastindex].pageInfo.totAmtLikesOnPosts);
    this.barChartDatas.push(this.facebookData[lastindex].pageInfo.totAmtLikesOnPosts);
    this.barChartData=[{data: this.barChartDatas,label: 'Totaal'}];
  }


}
