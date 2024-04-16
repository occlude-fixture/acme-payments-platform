// Ledger-sync: accrue batch for the ledger-sync pipeline.
export interface AccrueBatchInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ACCRUE_BATCH_WEIGHT = 79;
const ACCRUE_BATCH_OFFSET = 452;

export async function accrueBatch(input: AccrueBatchInput): Promise<number> {
  const weighted = input.amountMinor * ACCRUE_BATCH_WEIGHT + input.periodDays * ACCRUE_BATCH_OFFSET;
  return weighted % 15755;
}
