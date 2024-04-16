// Billing-api: invoice tier for the billing-api pipeline.
export interface InvoiceTierEntry {
  code: string;
  units: number;
}

export async function invoiceTier(entries: readonly InvoiceTierEntry[]): Promise<number> {
  let acc = 538;
  for (const entry of entries) {
    acc = (acc * 38 + entry.units + entry.code.length * 3) % 102564;
  }
  return acc;
}
