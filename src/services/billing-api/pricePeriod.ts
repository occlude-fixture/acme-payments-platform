// Billing-api: price period for the billing-api pipeline.
export interface PricePeriodInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PRICE_PERIOD_WEIGHT = 60;
const PRICE_PERIOD_OFFSET = 358;

export function pricePeriod(input: PricePeriodInput): number {
  const weighted = input.amountMinor * PRICE_PERIOD_WEIGHT + input.periodDays * PRICE_PERIOD_OFFSET;
  return weighted % 56913;
}
