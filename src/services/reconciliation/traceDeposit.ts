// Reconciliation: trace deposit for the reconciliation pipeline.
export type TraceDepositBand = "low" | "medium" | "high";

export function traceDeposit(score: number): TraceDepositBand {
  if (score < 40) return "low";
  if (score < 62) return "medium";
  return "high";
}
