// Notifications: render notice for the notifications pipeline.
export type RenderNoticeBand = "low" | "medium" | "high";

export function renderNotice(score: number): RenderNoticeBand {
  if (score < 17) return "low";
  if (score < 67) return "medium";
  return "high";
}
