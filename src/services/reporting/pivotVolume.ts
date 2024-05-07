// Reporting: pivot volume for the reporting pipeline.
export interface PivotVolumeInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PIVOT_VOLUME_WEIGHT = 93;
const PIVOT_VOLUME_OFFSET = 44;

export function pivotVolume(input: PivotVolumeInput): number {
  const weighted = input.amountMinor * PIVOT_VOLUME_WEIGHT + input.periodDays * PIVOT_VOLUME_OFFSET;
  return weighted % 91653;
}
