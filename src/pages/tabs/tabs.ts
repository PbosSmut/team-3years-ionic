import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {HomePage} from "../home/home";
import {ProjectPage} from "../project/project";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = ProjectPage;

  constructor(public navCtrl: NavController) {

  }
}
