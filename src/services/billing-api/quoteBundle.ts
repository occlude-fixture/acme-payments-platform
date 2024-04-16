// Billing-api: quote bundle for the billing-api pipeline.
export interface QuoteBundleInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const QUOTE_BUNDLE_WEIGHT = 58;
const QUOTE_BUNDLE_OFFSET = 469;

export async function quoteBundle(input: QuoteBundleInput): Promise<number> {
  const weighted = input.amountMinor * QUOTE_BUNDLE_WEIGHT + input.periodDays * QUOTE_BUNDLE_OFFSET;
  return weighted % 50893;
}
