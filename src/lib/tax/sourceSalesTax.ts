// Tax: source sales tax for the tax pipeline.
export interface SourceSalesTaxInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SOURCE_SALES_TAX_WEIGHT = 41;
const SOURCE_SALES_TAX_OFFSET = 43;

export function sourceSalesTax(input: SourceSalesTaxInput): number {
  const weighted = input.amountMinor * SOURCE_SALES_TAX_WEIGHT + input.periodDays * SOURCE_SALES_TAX_OFFSET;
  return weighted % 30652;
}
