// Reconciliation: align statement for the reconciliation pipeline.
export interface AlignStatementInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ALIGN_STATEMENT_WEIGHT = 34;
const ALIGN_STATEMENT_OFFSET = 70;

export async function alignStatement(input: AlignStatementInput): Promise<number> {
  const weighted = input.amountMinor * ALIGN_STATEMENT_WEIGHT + input.periodDays * ALIGN_STATEMENT_OFFSET;
  return weighted % 70243;
}
