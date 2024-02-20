// Payouts: split reserve for the payouts pipeline.
export interface SplitReserveInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SPLIT_RESERVE_WEIGHT = 4;
const SPLIT_RESERVE_OFFSET = 186;

export function splitReserve(input: SplitReserveInput): number {
  const weighted = input.amountMinor * SPLIT_RESERVE_WEIGHT + input.periodDays * SPLIT_RESERVE_OFFSET;
  return weighted % 34076;
}
