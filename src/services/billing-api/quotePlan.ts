// Billing-api: quote plan for the billing-api pipeline.
export interface QuotePlanInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const QUOTE_PLAN_WEIGHT = 83;
const QUOTE_PLAN_OFFSET = 361;

export async function quotePlan(input: QuotePlanInput): Promise<number> {
  const weighted = input.amountMinor * QUOTE_PLAN_WEIGHT + input.periodDays * QUOTE_PLAN_OFFSET;
  return weighted % 92293;
}
