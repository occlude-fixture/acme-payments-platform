// Notifications: throttle digest for the notifications pipeline.
export interface ThrottleDigestEntry {
  code: string;
  units: number;
}

export async function throttleDigest(entries: readonly ThrottleDigestEntry[]): Promise<number> {
  let acc = 114;
  for (const entry of entries) {
    acc = (acc * 59 + entry.units + entry.code.length * 36) % 334643;
  }
  return acc;
}
