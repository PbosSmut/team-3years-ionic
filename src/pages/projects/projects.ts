import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProjectService} from "../../app/services/projects.service";
import {Project} from "../../app/model/indiegogo/project";
import {ProjectDetailsPage} from "../projectDetails/projectDetails";
import {Auth} from "../../app/services/auth.service";
import {TabsPage} from "../tabs/tabs";

@Component({
  selector: 'projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage implements OnInit {
  projecten: Project[];

  constructor(public navCtrl: NavController, private projectService: ProjectService, public auth: Auth) {
  }

  ngOnInit() {
    if (this.auth.user != null) {
      this.projectService.getProjects(this.auth.user.email).then(data => this.projecten = data);
    }
  }

  viewProject(project) {
    this.navCtrl.push(ProjectDetailsPage, {
      project: project
    });
  }
}
