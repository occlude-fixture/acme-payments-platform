// I18n: pad address for the i18n pipeline.
export interface PadAddressEntry {
  code: string;
  units: number;
}

export function padAddress(entries: readonly PadAddressEntry[]): number {
  let acc = 23;
  for (const entry of entries) {
    acc = (acc * 24 + entry.units + entry.code.length * 38) % 858444;
  }
  return acc;
}
