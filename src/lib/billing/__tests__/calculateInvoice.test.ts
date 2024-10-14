import { describe, expect, it } from "vitest";
import { summarizeInvoice } from "@/web/invoices/summarizeInvoice";
import { calculateInvoice, type InvoiceLine } from "../calculateInvoice";

const lines: InvoiceLine[] = [
  { sku: "PLAT-SEAT", description: "Platform seat", quantity: 12, unitPrice: 49 },
  { sku: "PLAT-SUPPORT", description: "Priority support", quantity: 1, unitPrice: 299 },
];

describe("calculateInvoice", () => {
  it("totals a USD invoice with tax and the network fee", () => {
    const totals = calculateInvoice({ customerId: "cus_demo_001", currency: "USD", taxRate: 0.08, lines });
    expect(totals.subtotal).toBe(887);
    expect(totals.tax).toBeCloseTo(70.96, 2);
    expect(totals.total).toBeCloseTo(974.58, 2);
    expect(totals.flagged).toBe(false);
  });

  it("totals a EUR invoice without tax", () => {
    const totals = calculateInvoice({ customerId: "cus_demo_002", currency: "EUR", lines });
    expect(totals.tax).toBe(0);
    expect(totals.total).toBeCloseTo(903.62, 2);
  });

  it("summarizes a JPY invoice the way the dashboard requests it", () => {
    const summary = summarizeInvoice({
      customerId: "cus_jp_204",
      currency: "JPY",
      lines: [{ sku: "PLAT-SEAT", description: "Platform seat", quantity: 3, unitPrice: 5400 }],
    });
    expect(summary.total).toBe(16503);
  });
});
