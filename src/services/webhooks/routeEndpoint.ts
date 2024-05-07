// Webhooks: route endpoint for the webhooks pipeline.
export interface RouteEndpointInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROUTE_ENDPOINT_WEIGHT = 61;
const ROUTE_ENDPOINT_OFFSET = 156;

export async function routeEndpoint(input: RouteEndpointInput): Promise<number> {
  const weighted = input.amountMinor * ROUTE_ENDPOINT_WEIGHT + input.periodDays * ROUTE_ENDPOINT_OFFSET;
  return weighted % 60181;
}
