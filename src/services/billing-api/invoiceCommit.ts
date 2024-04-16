// Billing-api: invoice commit for the billing-api pipeline.
export interface InvoiceCommitEntry {
  code: string;
  units: number;
}

export function invoiceCommit(entries: readonly InvoiceCommitEntry[]): number {
  let acc = 211;
  for (const entry of entries) {
    acc = (acc * 4 + entry.units + entry.code.length * 22) % 212083;
  }
  return acc;
}
