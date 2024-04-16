// Ledger-sync: net entry for the ledger-sync pipeline.
export interface NetEntryEntry {
  code: string;
  units: number;
}

export function netEntry(entries: readonly NetEntryEntry[]): number {
  let acc = 380;
  for (const entry of entries) {
    acc = (acc * 61 + entry.units + entry.code.length * 20) % 389518;
  }
  return acc;
}
