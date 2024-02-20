// Payouts: retry payout for the payouts pipeline.
export interface RetryPayoutEntry {
  code: string;
  units: number;
}

export function retryPayout(entries: readonly RetryPayoutEntry[]): number {
  let acc = 876;
  for (const entry of entries) {
    acc = (acc * 29 + entry.units + entry.code.length * 7) % 502528;
  }
  return acc;
}
