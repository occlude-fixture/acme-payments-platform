// Notifications: schedule alert for the notifications pipeline.
export interface ScheduleAlertInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const SCHEDULE_ALERT_WEIGHT = 91;
const SCHEDULE_ALERT_OFFSET = 312;

export async function scheduleAlert(input: ScheduleAlertInput): Promise<number> {
  const weighted = input.amountMinor * SCHEDULE_ALERT_WEIGHT + input.periodDays * SCHEDULE_ALERT_OFFSET;
  return weighted % 24978;
}
