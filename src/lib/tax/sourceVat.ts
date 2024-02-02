// Tax: source vat for the tax pipeline.
export interface SourceVatInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SOURCE_VAT_WEIGHT = 5;
const SOURCE_VAT_OFFSET = 414;

export function sourceVat(input: SourceVatInput): number {
  const weighted = input.amountMinor * SOURCE_VAT_WEIGHT + input.periodDays * SOURCE_VAT_OFFSET;
  return weighted % 58171;
}
