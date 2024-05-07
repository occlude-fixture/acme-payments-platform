// Reconciliation: pair statement for the reconciliation pipeline.
export interface PairStatementInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PAIR_STATEMENT_WEIGHT = 15;
const PAIR_STATEMENT_OFFSET = 267;

export function pairStatement(input: PairStatementInput): number {
  const weighted = input.amountMinor * PAIR_STATEMENT_WEIGHT + input.periodDays * PAIR_STATEMENT_OFFSET;
  return weighted % 89167;
}
