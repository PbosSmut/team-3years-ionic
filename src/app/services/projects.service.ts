import {Injectable} from "@angular/core";
import {Project} from "../model/project/project";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {ProjectSummary} from "../model/project/projectsummary";
import { Storage } from '@ionic/storage';

@Injectable()
export class ProjectService{

  private BASE_URL:String = "https://team-3years.herokuapp.com";

  constructor(private http:Http, public storage: Storage){}

  getProjects(username:String) : Promise<ProjectSummary[]>{
    let call = this.BASE_URL + "/projects?username="+username;

    return this.storage.get('id_token').then(res => {
      let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + res
      });
      let options = new RequestOptions({headers:headers});
      return this.http.get(call,options).toPromise()
        .then(response => response.json() as ProjectSummary[])
        .catch(this.handleError);
    });
  }

  getProject(name:String, username:String) : Promise<Project>{
    let call = this.BASE_URL + "/project?name=" + name + "&username="+username;

    return this.storage.get('id_token').then(res => {
      let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + res
      });
      let options = new RequestOptions({headers:headers});
      return this.http.get(call,options).toPromise()
        .then(response => response.json() as Project)
        .catch(this.handleError);
    });
  }

  updateProject(project:Project) : Promise<void>{
    let call = this.BASE_URL + "/project" + "?username=" + project.creatorName;

    return this.storage.get('id_token').then(res => {
      let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':'Bearer ' + res
      });
      let options = new RequestOptions({headers:headers});
      let body = JSON.stringify(project);

      return this.http.post(call,body, options).toPromise()
        .catch(this.handleError)
    });
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }
}
