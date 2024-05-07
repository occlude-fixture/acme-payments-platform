// Notifications: render email for the notifications pipeline.
export type RenderEmailBand = "low" | "medium" | "high";

export function renderEmail(score: number): RenderEmailBand {
  if (score < 11) return "low";
  if (score < 66) return "medium";
  return "high";
}
