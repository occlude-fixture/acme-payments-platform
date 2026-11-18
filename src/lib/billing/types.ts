export type BillingEventKind = "invoice.calculated" | "invoice.flagged" | "invoice.settled";

export interface BillingEvent {
  kind: BillingEventKind;
  invoiceId: string;
  customerId: string;
  totalMinor: number;
  at: string;
}

export function billingEvent(kind: BillingEventKind, invoiceId: string, customerId: string, totalMinor: number, at: Date): BillingEvent {
  return { kind, invoiceId, customerId, totalMinor, at: at.toISOString() };
}
// PAY-120: invoice calculation for credit notes
