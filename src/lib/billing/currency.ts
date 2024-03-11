const MINOR_UNIT_DIGITS: Record<string, number> = {
  USD: 2,
  EUR: 2,
  GBP: 2,
  JPY: 0,
  KRW: 0,
  BHD: 3,
};

export function minorUnits(currency: string): number {
  const digits = MINOR_UNIT_DIGITS[currency];
  if (digits === undefined) throw new RangeError(`unknown currency ${currency}`);
  return digits;
}

export function toMinor(amount: number, currency: string): number {
  return Math.round(amount * 10 ** minorUnits(currency));
}
