import { describe, expect, it } from "vitest";
import { resolveRoute } from "@/web/router";

describe("resolveRoute", () => {
  it("maps known hashes to their page", () => {
    expect(resolveRoute("#/invoices").id).toBe("invoices");
    expect(resolveRoute("#/settings").id).toBe("settings");
  });

  it("falls back to the dashboard", () => {
    expect(resolveRoute("").id).toBe("dashboard");
    expect(resolveRoute("#/missing").id).toBe("dashboard");
  });
});
