// Billing-api: meter seat for the billing-api pipeline.
export interface MeterSeatEntry {
  code: string;
  units: number;
}

export async function meterSeat(entries: readonly MeterSeatEntry[]): Promise<number> {
  let acc = 325;
  for (const entry of entries) {
    acc = (acc * 49 + entry.units + entry.code.length * 25) % 136779;
  }
  return acc;
}
