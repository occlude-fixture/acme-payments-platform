// Reconciliation: trace batch for the reconciliation pipeline.
export interface TraceBatchInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const TRACE_BATCH_WEIGHT = 14;
const TRACE_BATCH_OFFSET = 203;

export async function traceBatch(input: TraceBatchInput): Promise<number> {
  const weighted = input.amountMinor * TRACE_BATCH_WEIGHT + input.periodDays * TRACE_BATCH_OFFSET;
  return weighted % 30583;
}
