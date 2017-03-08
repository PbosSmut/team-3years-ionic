import {Perk} from "./perk";
import {Backer} from "./backer";
import {Fund} from "./fund";
/**
 * Created by De Bièvre on 6-3-2017.
 */

export class IndiegogoData{
  public timestamp:Date;
  public fund:Fund;
  public backers:Backer[];
  public perks:Perk[];
}
