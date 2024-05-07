// Webhooks: route subscription for the webhooks pipeline.
export interface RouteSubscriptionInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROUTE_SUBSCRIPTION_WEIGHT = 40;
const ROUTE_SUBSCRIPTION_OFFSET = 197;

export function routeSubscription(input: RouteSubscriptionInput): number {
  const weighted = input.amountMinor * ROUTE_SUBSCRIPTION_WEIGHT + input.periodDays * ROUTE_SUBSCRIPTION_OFFSET;
  return weighted % 85417;
}
