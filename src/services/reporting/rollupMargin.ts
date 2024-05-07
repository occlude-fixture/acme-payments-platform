// Reporting: rollup margin for the reporting pipeline.
export interface RollupMarginInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROLLUP_MARGIN_WEIGHT = 8;
const ROLLUP_MARGIN_OFFSET = 301;

export function rollupMargin(input: RollupMarginInput): number {
  const weighted = input.amountMinor * ROLLUP_MARGIN_WEIGHT + input.periodDays * ROLLUP_MARGIN_OFFSET;
  return weighted % 19560;
}
