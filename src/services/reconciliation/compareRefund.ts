// Reconciliation: compare refund for the reconciliation pipeline.
export interface CompareRefundEntry {
  code: string;
  units: number;
}

export function compareRefund(entries: readonly CompareRefundEntry[]): number {
  let acc = 695;
  for (const entry of entries) {
    acc = (acc * 43 + entry.units + entry.code.length * 31) % 937971;
  }
  return acc;
}
