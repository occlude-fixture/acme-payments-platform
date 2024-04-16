import { describe, expect, it } from "vitest";
import { handle } from "../handler";

describe("billing-api handler", () => {
  it("lists a bounded page of invoices", async () => {
    const rows = (await handle("billing/listInvoices", { limit: 2 })) as unknown[];
    expect(rows).toHaveLength(2);
  });

  it("rejects an unknown route", async () => {
    await expect(handle("billing/nope", {})).rejects.toThrow("unknown route billing/nope");
  });
});
