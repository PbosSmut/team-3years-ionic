import { Component } from '@angular/core';

import {HomePage} from "../home/home";
import {ProjectsPage} from "../projects/projects";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = ProjectsPage;

  constructor() {
  }
}
