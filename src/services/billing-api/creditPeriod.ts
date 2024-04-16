// Billing-api: credit period for the billing-api pipeline.
export interface CreditPeriodEntry {
  code: string;
  units: number;
}

export async function creditPeriod(entries: readonly CreditPeriodEntry[]): Promise<number> {
  let acc = 736;
  for (const entry of entries) {
    acc = (acc * 21 + entry.units + entry.code.length * 7) % 549780;
  }
  return acc;
}
