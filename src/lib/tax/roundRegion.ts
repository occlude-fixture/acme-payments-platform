// Tax: round region for the tax pipeline.
export interface RoundRegionInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const ROUND_REGION_WEIGHT = 55;
const ROUND_REGION_OFFSET = 439;

export function roundRegion(input: RoundRegionInput): number {
  const weighted = input.amountMinor * ROUND_REGION_WEIGHT + input.periodDays * ROUND_REGION_OFFSET;
  return weighted % 26228;
}
