import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'indiegogodetails',
  templateUrl: 'indiegogodetails.html'
})
export class IndiegogoDetailsPage {
  private showIndiegogoBackersGraph : boolean = false;
  private showIndiegogoPerksGraph : boolean = false;
  private showIndiegogoFundsGraph: boolean = false;

  constructor() {}

  public toggleIndiegogoBackersGraph() {
    if (this.showIndiegogoBackersGraph) this.showIndiegogoBackersGraph = false;
    else this.showIndiegogoBackersGraph = true;
  }

  public toggleIndiegogoPerksGraph() {
    if (this.showIndiegogoPerksGraph) this.showIndiegogoPerksGraph = false;
    else this.showIndiegogoPerksGraph = true;
  }

  public toggleIndiegogoFundsGraph() {
    if (this.showIndiegogoFundsGraph) this.showIndiegogoFundsGraph = false;
    else this.showIndiegogoFundsGraph = true;
  }
}
