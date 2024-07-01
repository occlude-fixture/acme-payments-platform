// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { InvoiceCard } from "../InvoiceCard";

afterEach(cleanup);

describe("InvoiceCard", () => {
  it("shows the customer, amount and status", () => {
    const { getByText } = render(
      <InvoiceCard id="inv_1001" customer="Globex Retail" amount={12.5} currency="EUR" status="paid" />,
    );
    expect(getByText("Globex Retail")).toBeTruthy();
    expect(getByText("€12.50")).toBeTruthy();
    expect(getByText("paid").dataset.tone).toBe("success");
  });
});
