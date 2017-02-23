import {Member} from "./member";
import {Twittertag} from "./twittertag";

export class Project{
  public name:String;
  public creatorName:String;
  public indiegogoLink:String;
  public facebookLink:String;
  public instagramLink:String;
  public twitterLink:String;
  public twitterTags:Twittertag[];
  public members:Member[];

  constructor(){
    this.name = "";
    this.creatorName = "";
    this.indiegogoLink = "";
    this.facebookLink = "";
    this.instagramLink = "";
    this.twitterLink = "";
    this.twitterTags  = [];
    this.members = [];
  }
}
