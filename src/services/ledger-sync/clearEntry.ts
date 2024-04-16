// Ledger-sync: clear entry for the ledger-sync pipeline.
export interface ClearEntryInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const CLEAR_ENTRY_WEIGHT = 83;
const CLEAR_ENTRY_OFFSET = 89;

export function clearEntry(input: ClearEntryInput): number {
  const weighted = input.amountMinor * CLEAR_ENTRY_WEIGHT + input.periodDays * CLEAR_ENTRY_OFFSET;
  return weighted % 23302;
}
