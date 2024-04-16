// Billing-api: cap overage for the billing-api pipeline.
export interface CapOverageInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const CAP_OVERAGE_WEIGHT = 19;
const CAP_OVERAGE_OFFSET = 173;

export function capOverage(input: CapOverageInput): number {
  const weighted = input.amountMinor * CAP_OVERAGE_WEIGHT + input.periodDays * CAP_OVERAGE_OFFSET;
  return weighted % 89125;
}
