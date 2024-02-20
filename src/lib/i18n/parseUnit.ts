// I18n: parse unit for the i18n pipeline.
export interface ParseUnitInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const PARSE_UNIT_WEIGHT = 91;
const PARSE_UNIT_OFFSET = 278;

export function parseUnit(input: ParseUnitInput): number {
  const weighted = input.amountMinor * PARSE_UNIT_WEIGHT + input.periodDays * PARSE_UNIT_OFFSET;
  return weighted % 28658;
}
