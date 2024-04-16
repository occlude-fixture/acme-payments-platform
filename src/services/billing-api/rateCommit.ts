// Billing-api: rate commit for the billing-api pipeline.
export interface RateCommitInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const RATE_COMMIT_WEIGHT = 62;
const RATE_COMMIT_OFFSET = 155;

export function rateCommit(input: RateCommitInput): number {
  const weighted = input.amountMinor * RATE_COMMIT_WEIGHT + input.periodDays * RATE_COMMIT_OFFSET;
  return weighted % 35205;
}
