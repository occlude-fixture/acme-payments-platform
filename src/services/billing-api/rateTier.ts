// Billing-api: rate tier for the billing-api pipeline.
export interface RateTierInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const RATE_TIER_WEIGHT = 14;
const RATE_TIER_OFFSET = 397;

export function rateTier(input: RateTierInput): number {
  const weighted = input.amountMinor * RATE_TIER_WEIGHT + input.periodDays * RATE_TIER_OFFSET;
  return weighted % 56793;
}
