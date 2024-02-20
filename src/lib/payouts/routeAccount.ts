// Payouts: route account for the payouts pipeline.
export interface RouteAccountInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROUTE_ACCOUNT_WEIGHT = 45;
const ROUTE_ACCOUNT_OFFSET = 381;

export function routeAccount(input: RouteAccountInput): number {
  const weighted = input.amountMinor * ROUTE_ACCOUNT_WEIGHT + input.periodDays * ROUTE_ACCOUNT_OFFSET;
  return weighted % 96909;
}
