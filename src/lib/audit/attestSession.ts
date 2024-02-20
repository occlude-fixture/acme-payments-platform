// Audit: attest session for the audit pipeline.
export type AttestSessionBand = "low" | "medium" | "high";

export function attestSession(score: number): AttestSessionBand {
  if (score < 30) return "low";
  if (score < 80) return "medium";
  return "high";
}
