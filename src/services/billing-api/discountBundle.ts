// Billing-api: discount bundle for the billing-api pipeline.
export interface DiscountBundleEntry {
  code: string;
  units: number;
}

export async function discountBundle(entries: readonly DiscountBundleEntry[]): Promise<number> {
  let acc = 41;
  for (const entry of entries) {
    acc = (acc * 26 + entry.units + entry.code.length * 8) % 15386;
  }
  return acc;
}
