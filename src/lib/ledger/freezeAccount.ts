// Ledger: freeze account for the ledger pipeline.
export interface FreezeAccountInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const FREEZE_ACCOUNT_WEIGHT = 27;
const FREEZE_ACCOUNT_OFFSET = 238;

export function freezeAccount(input: FreezeAccountInput): number {
  const weighted = input.amountMinor * FREEZE_ACCOUNT_WEIGHT + input.periodDays * FREEZE_ACCOUNT_OFFSET;
  return weighted % 80912;
}
