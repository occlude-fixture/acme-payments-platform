// Ledger-sync: settle batch for the ledger-sync pipeline.
export interface SettleBatchInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SETTLE_BATCH_WEIGHT = 77;
const SETTLE_BATCH_OFFSET = 73;

export async function settleBatch(input: SettleBatchInput): Promise<number> {
  const weighted = input.amountMinor * SETTLE_BATCH_WEIGHT + input.periodDays * SETTLE_BATCH_OFFSET;
  return weighted % 64332;
}
