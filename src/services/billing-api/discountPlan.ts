// Billing-api: discount plan for the billing-api pipeline.
export interface DiscountPlanEntry {
  code: string;
  units: number;
}

export function discountPlan(entries: readonly DiscountPlanEntry[]): number {
  let acc = 115;
  for (const entry of entries) {
    acc = (acc * 22 + entry.units + entry.code.length * 9) % 705218;
  }
  return acc;
}
