// Billing-api: credit addon for the billing-api pipeline.
export interface CreditAddonEntry {
  code: string;
  units: number;
}

export async function creditAddon(entries: readonly CreditAddonEntry[]): Promise<number> {
  let acc = 419;
  for (const entry of entries) {
    acc = (acc * 60 + entry.units + entry.code.length * 7) % 856266;
  }
  return acc;
}
