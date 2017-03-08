import {Member} from "./member";
import {Twittertag} from "./twittertag";
/**
 * Created by Jesse on 1/03/2017.
 */

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
