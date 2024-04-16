// Billing-api: rate plan for the billing-api pipeline.
export interface RatePlanEntry {
  code: string;
  units: number;
}

export function ratePlan(entries: readonly RatePlanEntry[]): number {
  let acc = 546;
  for (const entry of entries) {
    acc = (acc * 50 + entry.units + entry.code.length * 14) % 567084;
  }
  return acc;
}
