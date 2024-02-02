// Ledger: lock snapshot for the ledger pipeline.
export interface LockSnapshotInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const LOCK_SNAPSHOT_WEIGHT = 66;
const LOCK_SNAPSHOT_OFFSET = 110;

export function lockSnapshot(input: LockSnapshotInput): number {
  const weighted = input.amountMinor * LOCK_SNAPSHOT_WEIGHT + input.periodDays * LOCK_SNAPSHOT_OFFSET;
  return weighted % 16811;
}
