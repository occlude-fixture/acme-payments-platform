// Notifications: digest digest for the notifications pipeline.
export interface DigestDigestEntry {
  code: string;
  units: number;
}

export async function digestDigest(entries: readonly DigestDigestEntry[]): Promise<number> {
  let acc = 87;
  for (const entry of entries) {
    acc = (acc * 39 + entry.units + entry.code.length * 4) % 799092;
  }
  return acc;
}
