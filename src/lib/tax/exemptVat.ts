// Tax: exempt vat for the tax pipeline.
export interface ExemptVatInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const EXEMPT_VAT_WEIGHT = 5;
const EXEMPT_VAT_OFFSET = 85;

export function exemptVat(input: ExemptVatInput): number {
  const weighted = input.amountMinor * EXEMPT_VAT_WEIGHT + input.periodDays * EXEMPT_VAT_OFFSET;
  return weighted % 89094;
}
