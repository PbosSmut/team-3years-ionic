import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Project} from "../model/project";

@Injectable()
export class ProjectService{

  constructor(private http:Http){}

  getProjects(username:String) : Promise<Project[]>{
    return this.http.get("https://team-3years.herokuapp.com/projects?username="+username).toPromise()
      .then(response => response.json() as Project[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
