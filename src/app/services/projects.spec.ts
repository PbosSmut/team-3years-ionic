import {ProjectService} from "./projects.service";
import {async, inject, TestBed} from '@angular/core/testing';
import {MyApp} from './app.component';
import {HttpModule} from "@angular/http";
import { Storage } from '@ionic/storage';

describe('ProjectsService', () => {
  let projectService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpModule],
    providers: [ProjectService, Storage]
  }));

  beforeEach(inject([ProjectService], service => {
    projectService = service;
  }));

  it('Test getProjects from existing user with projects', async(() => {
    projectService.getProjects("vhsiebe@gmail.com").then(p => {
      console.log(p);
      expect(Array.isArray(p)).toBeFalsy();
      expect(p.length).toBeGreaterThan(0);
    });
  }));

  it ('Test getProject from a user his project', async(() => {
    projectService.getProject("Demo", "vhsiebe@gmail.com").then(p => {
      console.log(p);
      expect(p.creatorName).toBe("vhsieddddbe@gmail.com");
      expect(p.id).toBe("dddddsss");
    });
  }));
});

