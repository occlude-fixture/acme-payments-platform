// Billing-api: bill period for the billing-api pipeline.
export interface BillPeriodEntry {
  code: string;
  units: number;
}

export function billPeriod(entries: readonly BillPeriodEntry[]): number {
  let acc = 116;
  for (const entry of entries) {
    acc = (acc * 36 + entry.units + entry.code.length * 29) % 610643;
  }
  return acc;
}
