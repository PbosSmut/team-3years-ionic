import {Component, OnInit, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {Backer} from "../model/backer";
import {IndiegogoService} from "../services/indiegogo.service";
import {Perk} from "../model/perk";


@Component({
  selector: 'perks',
  templateUrl: 'perks.component.html'
})
export class PerksComponent implements OnInit {
  private perks:Perk[];

  constructor(private indiegogoService: IndiegogoService) { }

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[]=[];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public barChartDatas: number[]=[];
  public barChartData:any[] = [
    {data: this.perks, label: 'Series A'},

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
    this.indiegogoService.getPerks(21858).then((res => {

      this.perks = res;

      this.perks.map((value) =>{
        console.log(value);
        this.barChartLabels.push("perk van "+ value.amount+" euro");
        this.barChartDatas.push(value.number_claimed);
      });
      this.barChartData=[
        {data: this.barChartDatas, label: 'Series A'}];


    }));
  }
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
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
