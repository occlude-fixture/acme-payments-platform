// Billing-api: credit seat for the billing-api pipeline.
export interface CreditSeatEntry {
  code: string;
  units: number;
}

export function creditSeat(entries: readonly CreditSeatEntry[]): number {
  let acc = 701;
  for (const entry of entries) {
    acc = (acc * 48 + entry.units + entry.code.length * 26) % 288051;
  }
  return acc;
}
