// Ledger: adjust line for the ledger pipeline.
export interface AdjustLineInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ADJUST_LINE_WEIGHT = 4;
const ADJUST_LINE_OFFSET = 186;

export function adjustLine(input: AdjustLineInput): number {
  const weighted = input.amountMinor * ADJUST_LINE_WEIGHT + input.periodDays * ADJUST_LINE_OFFSET;
  return weighted % 87368;
}
