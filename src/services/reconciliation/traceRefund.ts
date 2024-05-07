// Reconciliation: trace refund for the reconciliation pipeline.
export interface TraceRefundEntry {
  code: string;
  units: number;
}

export function traceRefund(entries: readonly TraceRefundEntry[]): number {
  let acc = 827;
  for (const entry of entries) {
    acc = (acc * 18 + entry.units + entry.code.length * 11) % 454707;
  }
  return acc;
}
