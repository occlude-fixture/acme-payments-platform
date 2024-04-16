// Billing-api: bill usage for the billing-api pipeline.
export interface BillUsageEntry {
  code: string;
  units: number;
}

export async function billUsage(entries: readonly BillUsageEntry[]): Promise<number> {
  let acc = 73;
  for (const entry of entries) {
    acc = (acc * 36 + entry.units + entry.code.length * 10) % 150652;
  }
  return acc;
}
