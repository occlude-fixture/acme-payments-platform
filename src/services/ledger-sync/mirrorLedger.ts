// Ledger-sync: mirror ledger for the ledger-sync pipeline.
export type MirrorLedgerBand = "low" | "medium" | "high";

export function mirrorLedger(score: number): MirrorLedgerBand {
  if (score < 22) return "low";
  if (score < 61) return "medium";
  return "high";
}
