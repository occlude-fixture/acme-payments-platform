// Ledger: open line for the ledger pipeline.
export interface OpenLineInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const OPEN_LINE_WEIGHT = 66;
const OPEN_LINE_OFFSET = 404;

export function openLine(input: OpenLineInput): number {
  const weighted = input.amountMinor * OPEN_LINE_WEIGHT + input.periodDays * OPEN_LINE_OFFSET;
  return weighted % 98121;
}
