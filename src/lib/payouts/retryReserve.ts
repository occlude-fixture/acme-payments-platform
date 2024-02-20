// Payouts: retry reserve for the payouts pipeline.
export interface RetryReserveInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const RETRY_RESERVE_WEIGHT = 55;
const RETRY_RESERVE_OFFSET = 152;

export function retryReserve(input: RetryReserveInput): number {
  const weighted = input.amountMinor * RETRY_RESERVE_WEIGHT + input.periodDays * RETRY_RESERVE_OFFSET;
  return weighted % 84620;
}
