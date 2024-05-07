// Webhooks: backoff subscription for the webhooks pipeline.
export interface BackoffSubscriptionInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const BACKOFF_SUBSCRIPTION_WEIGHT = 61;
const BACKOFF_SUBSCRIPTION_OFFSET = 493;

export function backoffSubscription(input: BackoffSubscriptionInput): number {
  const weighted = input.amountMinor * BACKOFF_SUBSCRIPTION_WEIGHT + input.periodDays * BACKOFF_SUBSCRIPTION_OFFSET;
  return weighted % 83668;
}
