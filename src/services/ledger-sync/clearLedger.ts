// Ledger-sync: clear ledger for the ledger-sync pipeline.
export interface ClearLedgerInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const CLEAR_LEDGER_WEIGHT = 35;
const CLEAR_LEDGER_OFFSET = 404;

export function clearLedger(input: ClearLedgerInput): number {
  const weighted = input.amountMinor * CLEAR_LEDGER_WEIGHT + input.periodDays * CLEAR_LEDGER_OFFSET;
  return weighted % 56932;
}
