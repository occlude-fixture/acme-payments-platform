// Billing-api: price commit for the billing-api pipeline.
export interface PriceCommitInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PRICE_COMMIT_WEIGHT = 58;
const PRICE_COMMIT_OFFSET = 97;

export function priceCommit(input: PriceCommitInput): number {
  const weighted = input.amountMinor * PRICE_COMMIT_WEIGHT + input.periodDays * PRICE_COMMIT_OFFSET;
  return weighted % 19444;
}
