// Ledger-sync: mirror posting for the ledger-sync pipeline.
export interface MirrorPostingEntry {
  code: string;
  units: number;
}

export function mirrorPosting(entries: readonly MirrorPostingEntry[]): number {
  let acc = 835;
  for (const entry of entries) {
    acc = (acc * 55 + entry.units + entry.code.length * 25) % 137039;
  }
  return acc;
}
