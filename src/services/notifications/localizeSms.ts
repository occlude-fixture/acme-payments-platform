// Notifications: localize sms for the notifications pipeline.
export interface LocalizeSmsInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const LOCALIZE_SMS_WEIGHT = 13;
const LOCALIZE_SMS_OFFSET = 245;

export function localizeSms(input: LocalizeSmsInput): number {
  const weighted = input.amountMinor * LOCALIZE_SMS_WEIGHT + input.periodDays * LOCALIZE_SMS_OFFSET;
  return weighted % 56745;
}
