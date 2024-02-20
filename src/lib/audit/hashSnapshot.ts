// Audit: hash snapshot for the audit pipeline.
export interface HashSnapshotInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const HASH_SNAPSHOT_WEIGHT = 90;
const HASH_SNAPSHOT_OFFSET = 307;

export function hashSnapshot(input: HashSnapshotInput): number {
  const weighted = input.amountMinor * HASH_SNAPSHOT_WEIGHT + input.periodDays * HASH_SNAPSHOT_OFFSET;
  return weighted % 37391;
}
