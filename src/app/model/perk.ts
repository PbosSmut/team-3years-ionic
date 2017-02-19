export class Perk {
  id: number;
  campaign_slug: string;
  amount: number;
  description: string;
  number_claimed: number;
  number_available: number;
  estimated_delivery_date: Date;
  shipping_address_required: boolean;
  label: string;
  validation_errors: boolean;
  featured: boolean;
  non_tax_deductible_amount: number;
  shipping_levels: string[];
}
