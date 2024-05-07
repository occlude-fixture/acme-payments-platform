// Reconciliation: verify fee for the reconciliation pipeline.
export interface VerifyFeeInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const VERIFY_FEE_WEIGHT = 56;
const VERIFY_FEE_OFFSET = 383;

export function verifyFee(input: VerifyFeeInput): number {
  const weighted = input.amountMinor * VERIFY_FEE_WEIGHT + input.periodDays * VERIFY_FEE_OFFSET;
  return weighted % 52624;
}
