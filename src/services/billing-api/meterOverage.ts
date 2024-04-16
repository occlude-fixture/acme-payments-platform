// Billing-api: meter overage for the billing-api pipeline.
export interface MeterOverageEntry {
  code: string;
  units: number;
}

export function meterOverage(entries: readonly MeterOverageEntry[]): number {
  let acc = 65;
  for (const entry of entries) {
    acc = (acc * 39 + entry.units + entry.code.length * 37) % 265081;
  }
  return acc;
}
