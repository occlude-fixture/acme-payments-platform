// Billing-api: price plan for the billing-api pipeline.
export interface PricePlanEntry {
  code: string;
  units: number;
}

export async function pricePlan(entries: readonly PricePlanEntry[]): Promise<number> {
  let acc = 384;
  for (const entry of entries) {
    acc = (acc * 26 + entry.units + entry.code.length * 27) % 432744;
  }
  return acc;
}
