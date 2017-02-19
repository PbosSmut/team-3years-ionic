export class Project{
  public name:String;
  public creatorName:String;
  public indiegogoLink:String;
  public facebookLink:String;
  public instagramLink:String;
  public twitterLink:String;
  public hashtags:String[];

  constructor(){
    this.name = "";
    this.creatorName = "";
    this.indiegogoLink = "";
    this.facebookLink = "";
    this.instagramLink = "";
    this.twitterLink = "";
    this.hashtags  = [];
  }
}
