// Ledger-sync: sweep journal for the ledger-sync pipeline.
export interface SweepJournalEntry {
  code: string;
  units: number;
}

export function sweepJournal(entries: readonly SweepJournalEntry[]): number {
  let acc = 282;
  for (const entry of entries) {
    acc = (acc * 27 + entry.units + entry.code.length * 17) % 32861;
  }
  return acc;
}
