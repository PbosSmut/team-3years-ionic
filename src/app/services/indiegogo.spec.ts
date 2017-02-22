import {IndiegogoService} from "./indiegogo.service";
import {async, inject, TestBed} from '@angular/core/testing';
import { MyApp } from './app.component';
import {HttpModule} from "@angular/http";

describe('IndiegogoService', () => {
  let indiegogoService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpModule ],
    providers: [ IndiegogoService ]
  }));

  beforeEach(inject([IndiegogoService], service => {
    indiegogoService = service;
  }));

  describe('getBackers', () => {
    it('Test getBackers from campaign with backers', async(() => {
      indiegogoService.getBackers(21858).then(b => {
        expect(Array.isArray(b)).toBeTruthy();
        expect(b.length).toBeGreaterThan(0);
      });
    }));
  });

  describe('getPerks', () => {
    it('Test getPerks from campaign with perks', async(() => {
      indiegogoService.getPerks(21858).then(p => {
        expect(Array.isArray(p)).toBeTruthy();
        expect(p.length).toBeGreaterThan(0);
      });
    }));
  });

  describe('getFunds', () => {
    it('Test getFundDetails from campaign with funds', async(() => {
      indiegogoService.getFundDetailsFromDb(21858).then(f => {
        expect(Array.isArray(f)).toBeTruthy();
        expect(f.length).toBeGreaterThan(0);
      });
    }));
  });
});
