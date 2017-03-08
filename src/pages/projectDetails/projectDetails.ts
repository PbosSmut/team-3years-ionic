import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Project} from "../../app/model/indiegogo/project";

@Component({
  selector: 'projectDetails',
  templateUrl: 'projectDetails.html'
})
export class ProjectDetailsPage {
  private showIndiegogoBackersGraph : boolean = false;
  private showIndiegogoPerksGraph : boolean = false;
 private showIndiegogoFundsGraph: boolean = false;
  private showTwitterFollowersGraph: boolean = false;
  private showTwitterFavsGraph: boolean = false;
  private showTwitterRetweetsGraph: boolean = false;
  private showInstagramFollowersGraph: boolean = false;
  private showFacebookLikesGraph: boolean = false;
  private showMembers: boolean = false;
  private project : Project;

  constructor(private navController: NavController, private navParams: NavParams) {
    this.project = navParams.get("project");
  }


  public toggleIndiegogoBackersGraph() {
    this.showIndiegogoBackersGraph = !this.showIndiegogoBackersGraph;
  }

  public toggleIndiegogoPerksGraph() {
    this.showIndiegogoPerksGraph = !this.showIndiegogoPerksGraph;
  }

  public toggleIndiegogoFundsGraph() {
    this.showIndiegogoFundsGraph = !this.showIndiegogoFundsGraph;
  }

  public toggleTwitterFollowersGraph() {
    this.showTwitterFollowersGraph = !this.showTwitterFollowersGraph;
  }

  public toggleTwitterFavsGraph() {
    this.showTwitterFavsGraph = !this.showTwitterFavsGraph;
  }

  public toggleTwitterRetweetsGraph() {
    this.showTwitterRetweetsGraph = !this.showTwitterRetweetsGraph;
  }

  public toggleInstagramFollowersGraph() {
    this.showInstagramFollowersGraph = !this.showInstagramFollowersGraph;
  }

  public toggleShowMembers() {
    console.log(this.project);
    this.showMembers = !this.showMembers;
  }

  public toggleFacebookLikesGraph() {
    this.showFacebookLikesGraph = !this.showFacebookLikesGraph;
  }
}
