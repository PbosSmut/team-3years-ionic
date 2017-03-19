import {Member} from "./member";
import {Twittertag} from "./twittertag";


export class ProjectSummary{

  public name:String;
  public creatorName:String;
  public indiegogoLink:String;
  public facebookLink:String;
  public instagramLink:String;
  public twitterLink:String;
  public twitterTags:Twittertag[];
  public members:Member[];

}
