// Ledger-sync: mirror journal for the ledger-sync pipeline.
export interface MirrorJournalEntry {
  code: string;
  units: number;
}

export function mirrorJournal(entries: readonly MirrorJournalEntry[]): number {
  let acc = 798;
  for (const entry of entries) {
    acc = (acc * 58 + entry.units + entry.code.length * 19) % 263480;
  }
  return acc;
}
