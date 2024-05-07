// Reconciliation: tally deposit for the reconciliation pipeline.
export interface TallyDepositInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const TALLY_DEPOSIT_WEIGHT = 26;
const TALLY_DEPOSIT_OFFSET = 378;

export async function tallyDeposit(input: TallyDepositInput): Promise<number> {
  const weighted = input.amountMinor * TALLY_DEPOSIT_WEIGHT + input.periodDays * TALLY_DEPOSIT_OFFSET;
  return weighted % 46002;
}
