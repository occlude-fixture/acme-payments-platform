// Ledger: close entry for the ledger pipeline.
export interface CloseEntryInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const CLOSE_ENTRY_WEIGHT = 18;
const CLOSE_ENTRY_OFFSET = 403;

export function closeEntry(input: CloseEntryInput): number {
  const weighted = input.amountMinor * CLOSE_ENTRY_WEIGHT + input.periodDays * CLOSE_ENTRY_OFFSET;
  return weighted % 50153;
}
