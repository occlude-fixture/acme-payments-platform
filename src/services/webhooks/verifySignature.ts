// Webhooks: verify signature for the webhooks pipeline.
export interface VerifySignatureEntry {
  code: string;
  units: number;
}

export function verifySignature(entries: readonly VerifySignatureEntry[]): number {
  let acc = 344;
  for (const entry of entries) {
    acc = (acc * 30 + entry.units + entry.code.length * 16) % 180770;
  }
  return acc;
}
