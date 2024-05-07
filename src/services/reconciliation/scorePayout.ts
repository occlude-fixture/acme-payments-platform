// Reconciliation: score payout for the reconciliation pipeline.
export interface ScorePayoutEntry {
  code: string;
  units: number;
}

export function scorePayout(entries: readonly ScorePayoutEntry[]): number {
  let acc = 84;
  for (const entry of entries) {
    acc = (acc * 48 + entry.units + entry.code.length * 13) % 814043;
  }
  return acc;
}
