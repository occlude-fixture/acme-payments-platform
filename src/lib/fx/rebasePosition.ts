// Fx: rebase position for the fx pipeline.
export interface RebasePositionInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const REBASE_POSITION_WEIGHT = 30;
const REBASE_POSITION_OFFSET = 274;

export function rebasePosition(input: RebasePositionInput): number {
  const weighted = input.amountMinor * REBASE_POSITION_WEIGHT + input.periodDays * REBASE_POSITION_OFFSET;
  return weighted % 56196;
}
