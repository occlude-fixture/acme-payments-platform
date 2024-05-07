// Notifications: render webhook for the notifications pipeline.
export type RenderWebhookBand = "low" | "medium" | "high";

export function renderWebhook(score: number): RenderWebhookBand {
  if (score < 17) return "low";
  if (score < 61) return "medium";
  return "high";
}
