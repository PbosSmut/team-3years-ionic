import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise'
import {Perk} from "../model/perk";
import {Backer} from "../model/backer";

@Injectable()
export class IndiegogoService {
  public static BASE_PATH: string = "https://team-3years.herokuapp.com/project/";
  constructor(private http: Http) {
  }

  public getPerks(campaignId: number): Promise<Perk[]> {
    return Promise.resolve(this.http.get(IndiegogoService.BASE_PATH + campaignId + "/indiegogo/perks").toPromise().then(response =>{
      const perks:Perk[] = response.json() as Perk[]; return perks;}).catch(this.handleError));

  }

  public getBackers(campaignId: number): Promise<Backer[]> {
    return Promise.resolve(this.http.get(IndiegogoService.BASE_PATH + campaignId + "/indiegogo/backers").toPromise().then(response =>{
      const backers:Backer[] = response.json() as Backer[];return backers;} ).catch(this.handleError));

  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
