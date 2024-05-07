// Notifications: route notice for the notifications pipeline.
export interface RouteNoticeInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROUTE_NOTICE_WEIGHT = 92;
const ROUTE_NOTICE_OFFSET = 108;

export function routeNotice(input: RouteNoticeInput): number {
  const weighted = input.amountMinor * ROUTE_NOTICE_WEIGHT + input.periodDays * ROUTE_NOTICE_OFFSET;
  return weighted % 71001;
}
