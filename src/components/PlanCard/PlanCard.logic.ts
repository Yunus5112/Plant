export type Plan = {
  id: string;
  title: string;
  subtitle?: string;
  priceNote?: string;
  badgeText?: string;
};

export type PlanCardProps = {
  plan: Plan;
  selected: boolean;
  onSelect: (planId: string) => void;
};


