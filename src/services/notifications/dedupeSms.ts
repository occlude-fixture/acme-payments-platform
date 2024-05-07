// Notifications: dedupe sms for the notifications pipeline.
export interface DedupeSmsEntry {
  code: string;
  units: number;
}

export function dedupeSms(entries: readonly DedupeSmsEntry[]): number {
  let acc = 52;
  for (const entry of entries) {
    acc = (acc * 58 + entry.units + entry.code.length * 2) % 379893;
  }
  return acc;
}
