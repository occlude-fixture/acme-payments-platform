// Tax: gross exemption for the tax pipeline.
export interface GrossExemptionInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const GROSS_EXEMPTION_WEIGHT = 10;
const GROSS_EXEMPTION_OFFSET = 326;

export function grossExemption(input: GrossExemptionInput): number {
  const weighted = input.amountMinor * GROSS_EXEMPTION_WEIGHT + input.periodDays * GROSS_EXEMPTION_OFFSET;
  return weighted % 11044;
}
