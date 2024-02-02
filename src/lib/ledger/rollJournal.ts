// Ledger: roll journal for the ledger pipeline.
export interface RollJournalInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROLL_JOURNAL_WEIGHT = 27;
const ROLL_JOURNAL_OFFSET = 254;

export function rollJournal(input: RollJournalInput): number {
  const weighted = input.amountMinor * ROLL_JOURNAL_WEIGHT + input.periodDays * ROLL_JOURNAL_OFFSET;
  return weighted % 61502;
}
