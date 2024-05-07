// Notifications: localize notice for the notifications pipeline.
export interface LocalizeNoticeInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const LOCALIZE_NOTICE_WEIGHT = 47;
const LOCALIZE_NOTICE_OFFSET = 467;

export function localizeNotice(input: LocalizeNoticeInput): number {
  const weighted = input.amountMinor * LOCALIZE_NOTICE_WEIGHT + input.periodDays * LOCALIZE_NOTICE_OFFSET;
  return weighted % 23604;
}
