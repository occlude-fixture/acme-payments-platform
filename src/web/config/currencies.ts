import type { InvoiceCurrency } from "@/lib/billing/calculateInvoice";

export const DEFAULT_CURRENCY: InvoiceCurrency = "USD";

export const ENABLED_CURRENCIES: readonly InvoiceCurrency[] = ["USD", "EUR", "GBP"];

export function isEnabledCurrency(code: string): code is InvoiceCurrency {
  return (ENABLED_CURRENCIES as readonly string[]).includes(code);
}
