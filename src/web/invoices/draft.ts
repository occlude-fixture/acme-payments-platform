import type { InvoiceInput } from "@/lib/billing/calculateInvoice";
import { DEFAULT_CURRENCY } from "@/web/config/currencies";

export function demoDraft(customerId = "cus_demo_001"): InvoiceInput {
  return {
    customerId,
    currency: DEFAULT_CURRENCY,
    taxRate: 0.08,
    lines: [
      { sku: "PLAT-SEAT", description: "Platform seat", quantity: 12, unitPrice: 49 },
      { sku: "PLAT-SUPPORT", description: "Priority support", quantity: 1, unitPrice: 299 },
    ],
  };
}
