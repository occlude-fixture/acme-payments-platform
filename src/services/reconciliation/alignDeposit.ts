// Reconciliation: align deposit for the reconciliation pipeline.
export interface AlignDepositInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ALIGN_DEPOSIT_WEIGHT = 64;
const ALIGN_DEPOSIT_OFFSET = 73;

export async function alignDeposit(input: AlignDepositInput): Promise<number> {
  const weighted = input.amountMinor * ALIGN_DEPOSIT_WEIGHT + input.periodDays * ALIGN_DEPOSIT_OFFSET;
  return weighted % 69789;
}
