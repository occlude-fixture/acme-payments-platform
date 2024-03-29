import { describe, expect, it } from "vitest";
import { screenInvoice } from "../fraudRules";

describe("screenInvoice", () => {
  it("passes an ordinary invoice", () => {
    expect(screenInvoice("cus_demo_001", 97_458, 2)).toEqual({ flagged: false, reasons: [] });
  });

  it("flags a large total and a watchlisted customer together", () => {
    const result = screenInvoice("cus_chargeback_77", 3_000_000, 3);
    expect(result.flagged).toBe(true);
    expect(result.reasons).toHaveLength(2);
  });
});
