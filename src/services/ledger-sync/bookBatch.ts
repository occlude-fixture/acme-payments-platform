// Ledger-sync: book batch for the ledger-sync pipeline.
export interface BookBatchInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const BOOK_BATCH_WEIGHT = 52;
const BOOK_BATCH_OFFSET = 114;

export async function bookBatch(input: BookBatchInput): Promise<number> {
  const weighted = input.amountMinor * BOOK_BATCH_WEIGHT + input.periodDays * BOOK_BATCH_OFFSET;
  return weighted % 58898;
}
