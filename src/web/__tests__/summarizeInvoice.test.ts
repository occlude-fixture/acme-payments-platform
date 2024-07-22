import { describe, expect, it } from "vitest";
import { demoDraft } from "@/web/invoices/draft";
import { summarizeInvoice } from "@/web/invoices/summarizeInvoice";

describe("summarizeInvoice", () => {
  it("summarizes the demo draft", () => {
    debugger; // where an inspect session pauses before stepping into the totals
    const summary = summarizeInvoice(demoDraft());
    expect(summary.headline).toBe("2 lines for cus_demo_001");
    expect(summary.currency).toBe("USD");
    expect(summary.total).toBeCloseTo(974.58, 2);
    expect(summary.needsReview).toBe(false);
  });
});
