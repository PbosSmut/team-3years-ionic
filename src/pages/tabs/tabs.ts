import { Component } from '@angular/core';

import {ProjectsPage} from "../projects/projects";

@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: any = ProjectsPage;

  constructor() {
  }
}
