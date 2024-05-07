// Reconciliation: match refund for the reconciliation pipeline.
export interface MatchRefundEntry {
  code: string;
  units: number;
}

export function matchRefund(entries: readonly MatchRefundEntry[]): number {
  let acc = 727;
  for (const entry of entries) {
    acc = (acc * 6 + entry.units + entry.code.length * 37) % 411073;
  }
  return acc;
}
