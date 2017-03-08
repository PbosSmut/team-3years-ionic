/**
 * Created by De Bièvre on 6-3-2017.
 */
import {Component, OnInit, Input} from '@angular/core';

import {Router, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {InstagramUserData} from "../model/instagram/instagramData";
import {InstagramService} from "../services/instagram.service";
import {InstagramData} from "../../model/instagram/instagramData";

@Component({
  selector: 'instagramFollowers',
  templateUrl: 'instagramFollowers.component.html',
})
export class InstagramUserDataComponent implements OnInit {
  @Input()
  instagramData: InstagramData[];

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
    this.instagramData.map((value) => {
      this.lineCharDatasLike.push(value.followed_by);
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
