import {Perk} from "./perk";

export class Backer{
  id: number;
  created_at: Date;
  amount: number;
  avater_url: string;
  by: string;
  perks: Perk[];
}
