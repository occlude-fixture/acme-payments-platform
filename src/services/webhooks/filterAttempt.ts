// Webhooks: filter attempt for the webhooks pipeline.
export interface FilterAttemptInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const FILTER_ATTEMPT_WEIGHT = 73;
const FILTER_ATTEMPT_OFFSET = 215;

export function filterAttempt(input: FilterAttemptInput): number {
  const weighted = input.amountMinor * FILTER_ATTEMPT_WEIGHT + input.periodDays * FILTER_ATTEMPT_OFFSET;
  return weighted % 56407;
}
