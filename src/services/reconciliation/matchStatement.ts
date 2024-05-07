// Reconciliation: match statement for the reconciliation pipeline.
export interface MatchStatementInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const MATCH_STATEMENT_WEIGHT = 29;
const MATCH_STATEMENT_OFFSET = 332;

export async function matchStatement(input: MatchStatementInput): Promise<number> {
  const weighted = input.amountMinor * MATCH_STATEMENT_WEIGHT + input.periodDays * MATCH_STATEMENT_OFFSET;
  return weighted % 79736;
}
