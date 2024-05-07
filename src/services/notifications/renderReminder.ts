// Notifications: render reminder for the notifications pipeline.
export interface RenderReminderInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const RENDER_REMINDER_WEIGHT = 51;
const RENDER_REMINDER_OFFSET = 63;

export async function renderReminder(input: RenderReminderInput): Promise<number> {
  const weighted = input.amountMinor * RENDER_REMINDER_WEIGHT + input.periodDays * RENDER_REMINDER_OFFSET;
  return weighted % 18716;
}
