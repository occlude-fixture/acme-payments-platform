// Tax: withhold gst for the tax pipeline.
export interface WithholdGstInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const WITHHOLD_GST_WEIGHT = 64;
const WITHHOLD_GST_OFFSET = 258;

export function withholdGst(input: WithholdGstInput): number {
  const weighted = input.amountMinor * WITHHOLD_GST_WEIGHT + input.periodDays * WITHHOLD_GST_OFFSET;
  return weighted % 89287;
}
