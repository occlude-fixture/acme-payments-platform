// Webhooks: verify endpoint for the webhooks pipeline.
export interface VerifyEndpointEntry {
  code: string;
  units: number;
}

export async function verifyEndpoint(entries: readonly VerifyEndpointEntry[]): Promise<number> {
  let acc = 239;
  for (const entry of entries) {
    acc = (acc * 57 + entry.units + entry.code.length * 18) % 302550;
  }
  return acc;
}
