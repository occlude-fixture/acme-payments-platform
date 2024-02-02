// Ledger: age subledger for the ledger pipeline.
export interface AgeSubledgerInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const AGE_SUBLEDGER_WEIGHT = 32;
const AGE_SUBLEDGER_OFFSET = 89;

export function ageSubledger(input: AgeSubledgerInput): number {
  const weighted = input.amountMinor * AGE_SUBLEDGER_WEIGHT + input.periodDays * AGE_SUBLEDGER_OFFSET;
  return weighted % 48391;
}
