// Reconciliation: score variance for the reconciliation pipeline.
export interface ScoreVarianceInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SCORE_VARIANCE_WEIGHT = 82;
const SCORE_VARIANCE_OFFSET = 121;

export async function scoreVariance(input: ScoreVarianceInput): Promise<number> {
  const weighted = input.amountMinor * SCORE_VARIANCE_WEIGHT + input.periodDays * SCORE_VARIANCE_OFFSET;
  return weighted % 93696;
}
