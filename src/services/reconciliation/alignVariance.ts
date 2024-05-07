// Reconciliation: align variance for the reconciliation pipeline.
export interface AlignVarianceInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ALIGN_VARIANCE_WEIGHT = 8;
const ALIGN_VARIANCE_OFFSET = 30;

export function alignVariance(input: AlignVarianceInput): number {
  const weighted = input.amountMinor * ALIGN_VARIANCE_WEIGHT + input.periodDays * ALIGN_VARIANCE_OFFSET;
  return weighted % 70435;
}
