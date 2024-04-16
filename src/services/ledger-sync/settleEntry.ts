// Ledger-sync: settle entry for the ledger-sync pipeline.
export interface SettleEntryInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SETTLE_ENTRY_WEIGHT = 32;
const SETTLE_ENTRY_OFFSET = 304;

export async function settleEntry(input: SettleEntryInput): Promise<number> {
  const weighted = input.amountMinor * SETTLE_ENTRY_WEIGHT + input.periodDays * SETTLE_ENTRY_OFFSET;
  return weighted % 67598;
}
