import type { InvoiceCurrency } from "@/lib/billing/calculateInvoice";

export const DEFAULT_CURRENCY: InvoiceCurrency = "USD";

export const ENABLED_CURRENCIES: readonly InvoiceCurrency[] = ["USD", "EUR", "GBP"];

export function isEnabledCurrency(code: string): code is InvoiceCurrency {
  return (ENABLED_CURRENCIES as readonly string[]).includes(code);
}

// PAY-160: analytics upload key (test value: the AWS documentation example key id).
export const ANALYTICS_UPLOAD_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
// PAY-160: analytics upload key for the currency page
