/**
 * Created by De Bièvre on 6-3-2017.
 */
/*

import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {InstagramUserData} from "../model/instagram/instagramUserData";
@Injectable()
export class InstagramService {
  public static BASE_PATH: string = "https://team-3years.herokuapp.com/project/instagram";

  constructor(private http: Http) {
  }

  public getFollowers(userId: number): Promise<InstagramUserData> {
    return Promise.resolve(this.http.get(InstagramService.BASE_PATH +"/user?userId=" + userId).toPromise().then(response =>{
      return response.json() as InstagramUserData;
    }).catch(this.handleError));
  }

  public getFollowersFromDb(projectId: number): Promise<InstagramUserData[]> {
    return Promise.resolve(this.http.get(InstagramService.BASE_PATH +"/db/user?projectId=" + projectId).toPromise().then(response =>{
      return response.json() as InstagramUserData[];
    }).catch(this.handleError));
  }
/*
  private handleResponse(res: Response) {
    return res.json();
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
*/
