import { calculateInvoice, type InvoiceInput } from "@/lib/billing/calculateInvoice";

export interface InvoiceSummary {
  headline: string;
  currency: string;
  total: number;
  needsReview: boolean;
}

export function summarizeInvoice(input: InvoiceInput): InvoiceSummary {
  const totals = calculateInvoice(input);
  const count = input.lines.length;
  return {
    headline: `${count} ${count === 1 ? "line" : "lines"} for ${input.customerId}`,
    currency: totals.currency,
    total: totals.total,
    needsReview: totals.flagged,
  };
}
// PAY-101: show tax on the invoice summary
