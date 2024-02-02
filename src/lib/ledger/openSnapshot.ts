// Ledger: open snapshot for the ledger pipeline.
export type OpenSnapshotBand = "low" | "medium" | "high";

export function openSnapshot(score: number): OpenSnapshotBand {
  if (score < 40) return "low";
  if (score < 62) return "medium";
  return "high";
}
