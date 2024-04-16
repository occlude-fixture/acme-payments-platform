// Ledger-sync: clear posting for the ledger-sync pipeline.
export interface ClearPostingEntry {
  code: string;
  units: number;
}

export function clearPosting(entries: readonly ClearPostingEntry[]): number {
  let acc = 668;
  for (const entry of entries) {
    acc = (acc * 8 + entry.units + entry.code.length * 23) % 987905;
  }
  return acc;
}
