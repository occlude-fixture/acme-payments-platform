// Ledger-sync: net ledger for the ledger-sync pipeline.
export interface NetLedgerEntry {
  code: string;
  units: number;
}

export function netLedger(entries: readonly NetLedgerEntry[]): number {
  let acc = 677;
  for (const entry of entries) {
    acc = (acc * 47 + entry.units + entry.code.length * 34) % 242095;
  }
  return acc;
}
