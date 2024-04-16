// Billing-api: invoice plan for the billing-api pipeline.
export interface InvoicePlanInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const INVOICE_PLAN_WEIGHT = 78;
const INVOICE_PLAN_OFFSET = 176;

export function invoicePlan(input: InvoicePlanInput): number {
  const weighted = input.amountMinor * INVOICE_PLAN_WEIGHT + input.periodDays * INVOICE_PLAN_OFFSET;
  return weighted % 62599;
}
