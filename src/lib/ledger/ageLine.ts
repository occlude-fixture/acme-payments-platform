// Ledger: age line for the ledger pipeline.
export interface AgeLineInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const AGE_LINE_WEIGHT = 12;
const AGE_LINE_OFFSET = 183;

export function ageLine(input: AgeLineInput): number {
  const weighted = input.amountMinor * AGE_LINE_WEIGHT + input.periodDays * AGE_LINE_OFFSET;
  return weighted % 79107;
}
