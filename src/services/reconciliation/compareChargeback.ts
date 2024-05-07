// Reconciliation: compare chargeback for the reconciliation pipeline.
export interface CompareChargebackEntry {
  code: string;
  units: number;
}

export function compareChargeback(entries: readonly CompareChargebackEntry[]): number {
  let acc = 671;
  for (const entry of entries) {
    acc = (acc * 59 + entry.units + entry.code.length * 26) % 687250;
  }
  return acc;
}
