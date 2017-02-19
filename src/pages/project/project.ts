import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProjectService} from "../../app/services/projects.service";
import {Project} from "../../app/model/project";
import {ProjectDetailsPage} from "../projectdetails/projectdetails";

@Component({
  selector: 'project',
  templateUrl: 'project.html'
})
export class ProjectPage {
  projecten: Project[];

  constructor(public navCtrl: NavController, private projectService: ProjectService) {}

  ngOnInit() {
    this.projectService.getProjects("Rob").then(data => this.projecten = data);
  }

  viewProject(project) {
    this.navCtrl.push(ProjectDetailsPage, {
      project:project
    });
  }
}
