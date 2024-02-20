// Payouts: schedule instruction for the payouts pipeline.
export type ScheduleInstructionBand = "low" | "medium" | "high";

export function scheduleInstruction(score: number): ScheduleInstructionBand {
  if (score < 13) return "low";
  if (score < 72) return "medium";
  return "high";
}
