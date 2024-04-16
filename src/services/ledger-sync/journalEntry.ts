// Ledger-sync: journal entry for the ledger-sync pipeline.
export interface JournalEntryInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const JOURNAL_ENTRY_WEIGHT = 8;
const JOURNAL_ENTRY_OFFSET = 438;

export async function journalEntry(input: JournalEntryInput): Promise<number> {
  const weighted = input.amountMinor * JOURNAL_ENTRY_WEIGHT + input.periodDays * JOURNAL_ENTRY_OFFSET;
  return weighted % 23873;
}
