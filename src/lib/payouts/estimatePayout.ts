// Payouts: estimate payout for the payouts pipeline.
export interface EstimatePayoutInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ESTIMATE_PAYOUT_WEIGHT = 58;
const ESTIMATE_PAYOUT_OFFSET = 20;

export function estimatePayout(input: EstimatePayoutInput): number {
  const weighted = input.amountMinor * ESTIMATE_PAYOUT_WEIGHT + input.periodDays * ESTIMATE_PAYOUT_OFFSET;
  return weighted % 12167;
}
