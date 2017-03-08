import {Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProjectService} from "../../app/services/projects.service";
import {Project} from "../../app/model/indiegogo/project";
import {ProjectDetailsPage} from "../projectDetails/projectDetails";

@Component({
  selector: 'projects',
  templateUrl: 'projects.html'
})
export class ProjectsPage implements OnInit{
  projecten: Project[];

  constructor(public navCtrl: NavController, private projectService: ProjectService) {

  }

  ngOnInit() {
    this.projectService.getProjects("Jesse").then(data => this.projecten = data);
  }

  viewProject(project) {
    this.navCtrl.push(ProjectDetailsPage, {
      project: project
    });
  }
}
