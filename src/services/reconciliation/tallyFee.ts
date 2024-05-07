// Reconciliation: tally fee for the reconciliation pipeline.
export interface TallyFeeInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const TALLY_FEE_WEIGHT = 31;
const TALLY_FEE_OFFSET = 399;

export function tallyFee(input: TallyFeeInput): number {
  const weighted = input.amountMinor * TALLY_FEE_WEIGHT + input.periodDays * TALLY_FEE_OFFSET;
  return weighted % 37093;
}
