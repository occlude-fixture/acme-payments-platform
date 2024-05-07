// Reconciliation: trace fee for the reconciliation pipeline.
export interface TraceFeeInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const TRACE_FEE_WEIGHT = 57;
const TRACE_FEE_OFFSET = 236;

export async function traceFee(input: TraceFeeInput): Promise<number> {
  const weighted = input.amountMinor * TRACE_FEE_WEIGHT + input.periodDays * TRACE_FEE_OFFSET;
  return weighted % 34150;
}
