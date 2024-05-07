// Webhooks: route queue for the webhooks pipeline.
export interface RouteQueueInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROUTE_QUEUE_WEIGHT = 27;
const ROUTE_QUEUE_OFFSET = 399;

export function routeQueue(input: RouteQueueInput): number {
  const weighted = input.amountMinor * ROUTE_QUEUE_WEIGHT + input.periodDays * ROUTE_QUEUE_OFFSET;
  return weighted % 44553;
}
