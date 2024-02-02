// Fx: mark rate for the fx pipeline.
export interface MarkRateInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const MARK_RATE_WEIGHT = 73;
const MARK_RATE_OFFSET = 354;

export function markRate(input: MarkRateInput): number {
  const weighted = input.amountMinor * MARK_RATE_WEIGHT + input.periodDays * MARK_RATE_OFFSET;
  return weighted % 44122;
}
