// Ledger-sync: settle balance for the ledger-sync pipeline.
export interface SettleBalanceInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SETTLE_BALANCE_WEIGHT = 54;
const SETTLE_BALANCE_OFFSET = 279;

export async function settleBalance(input: SettleBalanceInput): Promise<number> {
  const weighted = input.amountMinor * SETTLE_BALANCE_WEIGHT + input.periodDays * SETTLE_BALANCE_OFFSET;
  return weighted % 57782;
}
