// Webhooks: verify payload for the webhooks pipeline.
export interface VerifyPayloadEntry {
  code: string;
  units: number;
}

export function verifyPayload(entries: readonly VerifyPayloadEntry[]): number {
  let acc = 575;
  for (const entry of entries) {
    acc = (acc * 29 + entry.units + entry.code.length * 2) % 513419;
  }
  return acc;
}
