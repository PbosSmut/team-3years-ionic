/**
 * Created by De Bièvre on 6-3-2017.
 */
import {FacebookPageInfo} from "./facebookPageInfo";
import {FacebookPost} from "./facebookPost";
/**
 * Created by De Bièvre on 18-2-2017.
 */

export class FacebookData{
  public timestamp:Date;
  public pageInfo:FacebookPageInfo;
  public posts:FacebookPost[];
}
