import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {BackersComponent} from '../../app/backers/backers.component';

@Component({
  selector: 'projectdetails',
  templateUrl: 'projectdetails.html'
})
export class ProjectDetailsPage {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {

  }
}
