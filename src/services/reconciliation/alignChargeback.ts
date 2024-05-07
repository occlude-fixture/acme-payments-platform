// Reconciliation: align chargeback for the reconciliation pipeline.
export interface AlignChargebackEntry {
  code: string;
  units: number;
}

export function alignChargeback(entries: readonly AlignChargebackEntry[]): number {
  let acc = 741;
  for (const entry of entries) {
    acc = (acc * 25 + entry.units + entry.code.length * 10) % 133406;
  }
  return acc;
}
