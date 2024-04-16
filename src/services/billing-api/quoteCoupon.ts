// Billing-api: quote coupon for the billing-api pipeline.
export interface QuoteCouponInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const QUOTE_COUPON_WEIGHT = 60;
const QUOTE_COUPON_OFFSET = 333;

export function quoteCoupon(input: QuoteCouponInput): number {
  const weighted = input.amountMinor * QUOTE_COUPON_WEIGHT + input.periodDays * QUOTE_COUPON_OFFSET;
  return weighted % 91595;
}
