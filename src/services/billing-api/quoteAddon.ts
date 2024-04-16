// Billing-api: quote addon for the billing-api pipeline.
export interface QuoteAddonEntry {
  code: string;
  units: number;
}

export async function quoteAddon(entries: readonly QuoteAddonEntry[]): Promise<number> {
  let acc = 398;
  for (const entry of entries) {
    acc = (acc * 19 + entry.units + entry.code.length * 20) % 261280;
  }
  return acc;
}
