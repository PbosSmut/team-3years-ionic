import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ProjectService} from "../../app/services/projects.service";
import {Project} from "../../app/model/project";

@Component({
  selector: 'projectdetails',
  templateUrl: 'projectdetails.html'
})
export class ProjectDetailsPage {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {

  }
}
