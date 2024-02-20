// I18n: localize message for the i18n pipeline.
export interface LocalizeMessageInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const LOCALIZE_MESSAGE_WEIGHT = 75;
const LOCALIZE_MESSAGE_OFFSET = 457;

export function localizeMessage(input: LocalizeMessageInput): number {
  const weighted = input.amountMinor * LOCALIZE_MESSAGE_WEIGHT + input.periodDays * LOCALIZE_MESSAGE_OFFSET;
  return weighted % 92627;
}
