// Reporting: window volume for the reporting pipeline.
export interface WindowVolumeInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const WINDOW_VOLUME_WEIGHT = 12;
const WINDOW_VOLUME_OFFSET = 227;

export function windowVolume(input: WindowVolumeInput): number {
  const weighted = input.amountMinor * WINDOW_VOLUME_WEIGHT + input.periodDays * WINDOW_VOLUME_OFFSET;
  return weighted % 59947;
}
