import {Component, OnInit, Input} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {IndiegogoService} from "../../services/indiegogo.service";
import {Perk} from "../../model/indiegogo/perk";


@Component({
  selector: 'perks',
  templateUrl: 'perks.component.html'
})
export class PerksComponent implements OnInit {
  @Input()
  private perks: Perk[];

  constructor() {
  }

  public barChartOptions: any = {

    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = [];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = false;
  public barChartDatas: number[] = [];
  public barChartData: any[] = [
    {data: this.perks},
  ];
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: '#73879c',
      borderColor: '#73879c',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  ngOnInit(): void {
    this.perks.map((value) => {
      this.barChartLabels.push("€" + value.amount);
      this.barChartDatas.push(value.number_claimed);
    });
    this.barChartData = [
      {data: this.barChartDatas, label: 'Aantal'}];
  }
}
