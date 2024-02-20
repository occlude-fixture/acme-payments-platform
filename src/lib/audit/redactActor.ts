// Audit: redact actor for the audit pipeline.
export type RedactActorBand = "low" | "medium" | "high";

export function redactActor(score: number): RedactActorBand {
  if (score < 10) return "low";
  if (score < 50) return "medium";
  return "high";
}
