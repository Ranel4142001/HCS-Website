export interface PricingPlan {
  id: string;
  name: string;
  audience: string;
  price: string;
  priceUnit: string;
  ctaText: string;
  ctaHref: string;
  /** Name of the plan this one builds on, shown as "Everything in X, plus". */
  buildsOn?: string;
  features: string[];
  featured?: boolean;
}
