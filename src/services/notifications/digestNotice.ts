// Notifications: digest notice for the notifications pipeline.
export interface DigestNoticeInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const DIGEST_NOTICE_WEIGHT = 48;
const DIGEST_NOTICE_OFFSET = 308;

export function digestNotice(input: DigestNoticeInput): number {
  const weighted = input.amountMinor * DIGEST_NOTICE_WEIGHT + input.periodDays * DIGEST_NOTICE_OFFSET;
  return weighted % 68972;
}
