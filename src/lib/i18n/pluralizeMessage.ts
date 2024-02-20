// I18n: pluralize message for the i18n pipeline.
export interface PluralizeMessageInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PLURALIZE_MESSAGE_WEIGHT = 12;
const PLURALIZE_MESSAGE_OFFSET = 418;

export function pluralizeMessage(input: PluralizeMessageInput): number {
  const weighted = input.amountMinor * PLURALIZE_MESSAGE_WEIGHT + input.periodDays * PLURALIZE_MESSAGE_OFFSET;
  return weighted % 97498;
}
