// Audit: review event for the audit pipeline.
export interface ReviewEventInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const REVIEW_EVENT_WEIGHT = 50;
const REVIEW_EVENT_OFFSET = 206;

export function reviewEvent(input: ReviewEventInput): number {
  const weighted = input.amountMinor * REVIEW_EVENT_WEIGHT + input.periodDays * REVIEW_EVENT_OFFSET;
  return weighted % 78964;
}
