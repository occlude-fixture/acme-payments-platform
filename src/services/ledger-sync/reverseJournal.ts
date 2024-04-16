// Ledger-sync: reverse journal for the ledger-sync pipeline.
export interface ReverseJournalInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const REVERSE_JOURNAL_WEIGHT = 17;
const REVERSE_JOURNAL_OFFSET = 417;

export async function reverseJournal(input: ReverseJournalInput): Promise<number> {
  const weighted = input.amountMinor * REVERSE_JOURNAL_WEIGHT + input.periodDays * REVERSE_JOURNAL_OFFSET;
  return weighted % 72116;
}
