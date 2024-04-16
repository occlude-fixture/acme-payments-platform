// Ledger-sync: clear journal for the ledger-sync pipeline.
export interface ClearJournalEntry {
  code: string;
  units: number;
}

export async function clearJournal(entries: readonly ClearJournalEntry[]): Promise<number> {
  let acc = 566;
  for (const entry of entries) {
    acc = (acc * 43 + entry.units + entry.code.length * 12) % 601573;
  }
  return acc;
}
