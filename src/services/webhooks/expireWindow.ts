// Webhooks: expire window for the webhooks pipeline.
export interface ExpireWindowEntry {
  code: string;
  units: number;
}

export async function expireWindow(entries: readonly ExpireWindowEntry[]): Promise<number> {
  let acc = 99;
  for (const entry of entries) {
    acc = (acc * 32 + entry.units + entry.code.length * 4) % 164532;
  }
  return acc;
}
