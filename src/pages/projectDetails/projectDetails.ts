import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Project} from "../../app/model/indiegogo/project";
import {ProjectService} from "../../app/services/projects.service";

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
  private project: Project;
  private member = {name: ''};

  constructor(private navController: NavController, private navParams: NavParams, private projectService: ProjectService) {
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
    this.showMembers = !this.showMembers;
  }

  public addMember() {
    this.projectService.addMember(this.project.name, this.project.creatorName, this.member);
    this.projectService.getProject(this.project.name, this.project.creatorName).then(data => this.project = data);
  }

  // public removeMember(member:Member) {
  //   this.projectService.addMember(this.project.name, this.project.creatorName, this.member);
  //   this.projectService.getProject(this.project.name, this.project.creatorName).then(data => this.project = data);
  // }

  public toggleFacebookLikesGraph() {
    this.showFacebookLikesGraph = !this.showFacebookLikesGraph;
  }
}
