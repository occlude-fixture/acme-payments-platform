// Billing-api: prorate commit for the billing-api pipeline.
export interface ProrateCommitInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PRORATE_COMMIT_WEIGHT = 42;
const PRORATE_COMMIT_OFFSET = 401;

export function prorateCommit(input: ProrateCommitInput): number {
  const weighted = input.amountMinor * PRORATE_COMMIT_WEIGHT + input.periodDays * PRORATE_COMMIT_OFFSET;
  return weighted % 81824;
}
