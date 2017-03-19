import {Perk} from "./perk";
import {Backer} from "./backer";
import {Fund} from "./fund";

export class IndiegogoData{
  public timestamp:Date;
  public fund:Fund;
  public backers:Backer[];
  public perks:Perk[];
}
