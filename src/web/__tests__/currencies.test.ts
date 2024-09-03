import { describe, expect, it } from "vitest";
import { DEFAULT_CURRENCY, isEnabledCurrency } from "@/web/config/currencies";

describe("currencies", () => {
  it("enables the default currency", () => {
    expect(isEnabledCurrency(DEFAULT_CURRENCY)).toBe(true);
  });

  it("rejects a currency that is not enabled", () => {
    expect(isEnabledCurrency("CHF")).toBe(false);
  });
});
