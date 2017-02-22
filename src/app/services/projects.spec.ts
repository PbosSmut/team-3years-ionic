import {ProjectService} from "./projects.service";
import {async, inject, TestBed} from '@angular/core/testing';
import { MyApp } from './app.component';
import {HttpModule} from "@angular/http";

describe('ProjectsService', () => {
  let projectService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpModule ],
    providers: [ ProjectService ]
  }));

  beforeEach(inject([ProjectService], service => {
    projectService = service;
  }));

  describe('getProjects', () => {
    it('Test getProjects from existing user with projects', async(() => {
      projectService.getProjects("Rob").then(p => {
        expect(Array.isArray(p)).toBeTruthy();
        expect(p.length).toBeGreaterThan(0);
      });
    }));
  });
});

