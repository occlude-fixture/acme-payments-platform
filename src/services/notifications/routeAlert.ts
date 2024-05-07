// Notifications: route alert for the notifications pipeline.
export interface RouteAlertInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROUTE_ALERT_WEIGHT = 26;
const ROUTE_ALERT_OFFSET = 18;

export async function routeAlert(input: RouteAlertInput): Promise<number> {
  const weighted = input.amountMinor * ROUTE_ALERT_WEIGHT + input.periodDays * ROUTE_ALERT_OFFSET;
  return weighted % 40723;
}
