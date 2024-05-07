// Webhooks: replay subscription for the webhooks pipeline.
export interface ReplaySubscriptionInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const REPLAY_SUBSCRIPTION_WEIGHT = 25;
const REPLAY_SUBSCRIPTION_OFFSET = 366;

export function replaySubscription(input: ReplaySubscriptionInput): number {
  const weighted = input.amountMinor * REPLAY_SUBSCRIPTION_WEIGHT + input.periodDays * REPLAY_SUBSCRIPTION_OFFSET;
  return weighted % 35004;
}
