// I18n: detect message for the i18n pipeline.
export interface DetectMessageInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const DETECT_MESSAGE_WEIGHT = 60;
const DETECT_MESSAGE_OFFSET = 455;

export function detectMessage(input: DetectMessageInput): number {
  const weighted = input.amountMinor * DETECT_MESSAGE_WEIGHT + input.periodDays * DETECT_MESSAGE_OFFSET;
  return weighted % 36231;
}
