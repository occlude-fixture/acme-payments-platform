// Fx: rebase rate for the fx pipeline.
export interface RebaseRateInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const REBASE_RATE_WEIGHT = 39;
const REBASE_RATE_OFFSET = 16;

export function rebaseRate(input: RebaseRateInput): number {
  const weighted = input.amountMinor * REBASE_RATE_WEIGHT + input.periodDays * REBASE_RATE_OFFSET;
  return weighted % 86334;
}
