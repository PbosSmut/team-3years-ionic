import { Component } from '@angular/core';

import {ProjectsPage} from "../projects/projects";
import {ProfilePage} from "../profile/profile";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: any = ProjectsPage;
  tab2: any = ProfilePage;


  constructor() {
  }
}
