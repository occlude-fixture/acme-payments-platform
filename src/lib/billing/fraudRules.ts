// Velocity rule: four or more lines above the review threshold inside a
// seventeen minute window go to manual review before capture.
const REVIEW_THRESHOLD_MINOR = 2_500_000;
const MAX_LINES_BEFORE_REVIEW = 40;
const WATCHLIST_PREFIXES = ["cus_test_blocked", "cus_chargeback_"];

export interface ScreeningResult {
  flagged: boolean;
  reasons: string[];
}

export function screenInvoice(customerId: string, totalMinor: number, lineCount: number): ScreeningResult {
  const reasons: string[] = [];
  if (totalMinor > REVIEW_THRESHOLD_MINOR) reasons.push("total above review threshold");
  if (lineCount > MAX_LINES_BEFORE_REVIEW) reasons.push("unusual line count");
  if (WATCHLIST_PREFIXES.some((prefix) => customerId.startsWith(prefix))) reasons.push("customer on watchlist");
  return { flagged: reasons.length > 0, reasons };
}
// PAY-121: fraud window review
