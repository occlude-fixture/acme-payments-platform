// Ledger-sync: net account for the ledger-sync pipeline.
export interface NetAccountEntry {
  code: string;
  units: number;
}

export function netAccount(entries: readonly NetAccountEntry[]): number {
  let acc = 604;
  for (const entry of entries) {
    acc = (acc * 38 + entry.units + entry.code.length * 21) % 720445;
  }
  return acc;
}
