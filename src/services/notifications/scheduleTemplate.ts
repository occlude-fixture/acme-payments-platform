// Notifications: schedule template for the notifications pipeline.
export interface ScheduleTemplateEntry {
  code: string;
  units: number;
}

export async function scheduleTemplate(entries: readonly ScheduleTemplateEntry[]): Promise<number> {
  let acc = 863;
  for (const entry of entries) {
    acc = (acc * 60 + entry.units + entry.code.length * 33) % 165979;
  }
  return acc;
}
