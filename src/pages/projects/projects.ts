import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProjectService} from "../../app/services/projects.service";
import {Project} from "../../app/model/indiegogo/project";
import {ProjectDetailsPage} from "../projectDetails/projectDetails";
import {Auth} from "../../app/services/auth.service";
import { Storage } from '@ionic/storage';


@Component({
  selector: 'projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage implements OnInit{
  projecten: Project[];

  constructor(public navCtrl: NavController, private projectService: ProjectService, public auth: Auth, public storage: Storage) {}

  ngOnInit() {
      this.projectService.getProjects(this.auth.user.user_id.replace('|', '-')).then(data => this.projecten = data);
    //this.projectService.getProjects("auth0-58c67d804f22093f927f0052").then(data => this.projecten = data);
  }

  viewProject(project) {
    this.navCtrl.push(ProjectDetailsPage, {
      project: project
    });
  }
}
