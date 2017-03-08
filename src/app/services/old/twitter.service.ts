/*import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {TwitterData} from "../model/twitter/twitterData";

@Injectable()
export class TwitterService {
  public static BASE_PATH: string = "https://team-3years.herokuapp.com/project/twitter";

  constructor(private http: Http) {
  }*/
/*
  public getTwitterData(username: string): Promise<TwitterData[]> {
    return Promise.resolve(this.http.get(TwitterService.BASE_PATH + "/db?username=" + username).toPromise().then(response => {
      return response.json() as TwitterData[];
    }).catch(this.handleError));
  }

  private handleResponse(res: Response) {
    let body = res.json();
    return body;
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}*/
