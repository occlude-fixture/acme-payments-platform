// I18n: format name for the i18n pipeline.
export interface FormatNameInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const FORMAT_NAME_WEIGHT = 70;
const FORMAT_NAME_OFFSET = 109;

export function formatName(input: FormatNameInput): number {
  const weighted = input.amountMinor * FORMAT_NAME_WEIGHT + input.periodDays * FORMAT_NAME_OFFSET;
  return weighted % 66848;
}
