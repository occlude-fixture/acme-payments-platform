// Billing-api: price bundle for the billing-api pipeline.
export interface PriceBundleInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PRICE_BUNDLE_WEIGHT = 11;
const PRICE_BUNDLE_OFFSET = 128;

export async function priceBundle(input: PriceBundleInput): Promise<number> {
  const weighted = input.amountMinor * PRICE_BUNDLE_WEIGHT + input.periodDays * PRICE_BUNDLE_OFFSET;
  return weighted % 13444;
}
