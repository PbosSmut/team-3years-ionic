import {Twittertag} from "./twittertag";
import {Member} from "./member";
import {FacebookData} from "../facebook/facebookData";
import {IndiegogoData} from "../indiegogo/indiegogoData";
import {TwitterData} from "../twitter/twitterData";
import {InstagramData} from "../instagram/instagramData";

export class Project{
  public name:String;
  public creatorName:String;

  public indiegogoLink:String;
  public facebookLink:String;
  public instagramLink:String;
  public twitterLink:String;
  public twitterTags:Twittertag[];

  public members:Member[];

  public indiegogoId:String;
  public facebookId:String;
  public twitterId:String;
  public instagramId:String;
  public instagramMediaId:String;

  public indiegogoDataList:IndiegogoData[];
  public facebookDataList:FacebookData[];
  public twitterDataList:TwitterData[];
  public instagramDataList:InstagramData[];

  constructor(){
    this.name = "";
    this.creatorName = "";

    this.indiegogoLink = "";
    this.facebookLink = "";
    this.instagramLink = "";
    this.twitterLink = "";
    this.twitterTags  = [];

    this.members = [];

    this.indiegogoId = "";
    this.facebookId = "";
    this.twitterId = "";
    this.instagramId = "";
    this.instagramMediaId = "";

    this.indiegogoDataList = [];
    this.facebookDataList = [];
    this.twitterDataList = [];
    this.instagramDataList = [];
  }
}
