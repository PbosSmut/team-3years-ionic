import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Project} from "../../app/model/project";

@Component({
  selector: 'indiegogodetails',
  templateUrl: 'indiegogodetails.html'
})
export class IndiegogoDetailsPage {
  private showIndiegogoBackersGraph : boolean = false;
  private showIndiegogoPerksGraph : boolean = false;
  private showIndiegogoFundsGraph: boolean = false;
  private showMembers: boolean = false;
  private project : Project;

  constructor(private navController: NavController, private navParams: NavParams) {
    this.project = navParams.get("project");
  }


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

  public toggleShowMembers() {
    console.log(this.project);
    if (this.showMembers) this.showMembers = false;
    else this.showMembers = true;
  }
}
