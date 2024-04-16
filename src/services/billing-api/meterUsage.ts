// Billing-api: meter usage for the billing-api pipeline.
export interface MeterUsageEntry {
  code: string;
  units: number;
}

export async function meterUsage(entries: readonly MeterUsageEntry[]): Promise<number> {
  let acc = 228;
  for (const entry of entries) {
    acc = (acc * 26 + entry.units + entry.code.length * 8) % 612347;
  }
  return acc;
}
