// Notifications: dedupe receipt for the notifications pipeline.
export interface DedupeReceiptEntry {
  code: string;
  units: number;
}

export function dedupeReceipt(entries: readonly DedupeReceiptEntry[]): number {
  let acc = 178;
  for (const entry of entries) {
    acc = (acc * 39 + entry.units + entry.code.length * 16) % 331740;
  }
  return acc;
}
