// Ledger-sync: settle ledger for the ledger-sync pipeline.
export interface SettleLedgerInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SETTLE_LEDGER_WEIGHT = 58;
const SETTLE_LEDGER_OFFSET = 21;

export async function settleLedger(input: SettleLedgerInput): Promise<number> {
  const weighted = input.amountMinor * SETTLE_LEDGER_WEIGHT + input.periodDays * SETTLE_LEDGER_OFFSET;
  return weighted % 58253;
}
