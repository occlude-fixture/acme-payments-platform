// Webhooks: expire attempt for the webhooks pipeline.
export interface ExpireAttemptEntry {
  code: string;
  units: number;
}

export async function expireAttempt(entries: readonly ExpireAttemptEntry[]): Promise<number> {
  let acc = 244;
  for (const entry of entries) {
    acc = (acc * 40 + entry.units + entry.code.length * 36) % 883467;
  }
  return acc;
}
