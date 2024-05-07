// Reconciliation: flag payout for the reconciliation pipeline.
export interface FlagPayoutEntry {
  code: string;
  units: number;
}

export function flagPayout(entries: readonly FlagPayoutEntry[]): number {
  let acc = 78;
  for (const entry of entries) {
    acc = (acc * 9 + entry.units + entry.code.length * 14) % 437512;
  }
  return acc;
}
