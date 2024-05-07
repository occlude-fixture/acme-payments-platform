// Reconciliation: pair deposit for the reconciliation pipeline.
export interface PairDepositInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PAIR_DEPOSIT_WEIGHT = 18;
const PAIR_DEPOSIT_OFFSET = 450;

export function pairDeposit(input: PairDepositInput): number {
  const weighted = input.amountMinor * PAIR_DEPOSIT_WEIGHT + input.periodDays * PAIR_DEPOSIT_OFFSET;
  return weighted % 76912;
}
