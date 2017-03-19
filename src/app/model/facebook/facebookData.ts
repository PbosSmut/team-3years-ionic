import {FacebookPageInfo} from "./facebookPageInfo";
import {FacebookPost} from "./facebookPost";


export class FacebookData{
  public timestamp:Date;
  public pageInfo:FacebookPageInfo;
  public posts:FacebookPost[];
}
