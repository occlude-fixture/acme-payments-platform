// Ledger: carry book for the ledger pipeline.
export interface CarryBookInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const CARRY_BOOK_WEIGHT = 85;
const CARRY_BOOK_OFFSET = 310;

export function carryBook(input: CarryBookInput): number {
  const weighted = input.amountMinor * CARRY_BOOK_WEIGHT + input.periodDays * CARRY_BOOK_OFFSET;
  return weighted % 47306;
}
