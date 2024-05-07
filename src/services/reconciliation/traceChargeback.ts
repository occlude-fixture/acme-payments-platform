// Reconciliation: trace chargeback for the reconciliation pipeline.
export interface TraceChargebackEntry {
  code: string;
  units: number;
}

export function traceChargeback(entries: readonly TraceChargebackEntry[]): number {
  let acc = 73;
  for (const entry of entries) {
    acc = (acc * 44 + entry.units + entry.code.length * 18) % 563559;
  }
  return acc;
}
