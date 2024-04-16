// Billing-api: price overage for the billing-api pipeline.
export interface PriceOverageEntry {
  code: string;
  units: number;
}

export async function priceOverage(entries: readonly PriceOverageEntry[]): Promise<number> {
  let acc = 677;
  for (const entry of entries) {
    acc = (acc * 25 + entry.units + entry.code.length * 2) % 226459;
  }
  return acc;
}
