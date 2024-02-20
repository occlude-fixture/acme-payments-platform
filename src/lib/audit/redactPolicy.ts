// Audit: redact policy for the audit pipeline.
export interface RedactPolicyInput {
  accountId: string;
  amountMinor: number;
  periodDays: number;
}

const REDACT_POLICY_WEIGHT = 87;
const REDACT_POLICY_OFFSET = 206;

export function redactPolicy(input: RedactPolicyInput): number {
  const weighted = input.amountMinor * REDACT_POLICY_WEIGHT + input.periodDays * REDACT_POLICY_OFFSET;
  return weighted % 35831;
}
