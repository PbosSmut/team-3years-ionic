import {Injectable} from "@angular/core";
import {Project} from "../model/project/project";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import {ProjectSummary} from "../model/project/projectsummary";
import {Member} from "../model/project/member";

/**
 * Created by Jesse on 13/02/2017.
 */

@Injectable()
export class ProjectService{

  private BASE_URL:String = "https://team-3years.herokuapp.com";

  constructor(private http:Http){}

  getProjects(username:String) : Promise<ProjectSummary[]>{
    let call = this.BASE_URL + "/projects?username="+username;
    console.log(call);
    return this.http.get(call).toPromise()
      .then(response => response.json() as ProjectSummary[])
      .catch(this.handleError);
  }

  getProject(name:String, username:String) : Promise<Project>{
    let call = this.BASE_URL + "/project?name=" + name + "&username="+username;
    console.log(call);
    return this.http.get(call).toPromise()
      .then(response => response.json() as Project)
      .catch(this.handleError);
  }

  addProject(project:Project) : Promise<void>{
    let call = this.BASE_URL + "/projects";
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    let body = JSON.stringify(project);
    console.log(body);
    return this.http.post(call,body, options).toPromise()
      .catch(this.handleError)
  }

  removeProject(project:Project) : Promise<void>{
    let call = this.BASE_URL + "/project?name=" + project.name + "&username=" + project.creatorName;
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.delete(call,options).toPromise()
      .catch(this.handleError)
  }

  addMember(projectName:String, creatorName:String, member:Member) {
    let call = this.BASE_URL + "/project/" + projectName + "/members/?username=" + creatorName + "&member=" + member.name;
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    let body = JSON.stringify(member);
    return this.http.post(call,body, options).toPromise()
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any>{
    return Promise.reject(error.message || error);
  }

}
