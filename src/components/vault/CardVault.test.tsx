// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { CardVault, vaultEndpoint } from "./CardVault";

afterEach(cleanup);

describe("CardVault", () => {
  it("lists cards by brand and last four", () => {
    const { getByText } = render(<CardVault cards={[{ token: "tok_vault_live_abc", brand: "Visa", last4: "4242" }]} />);
    expect(getByText("Visa ending 4242")).toBeTruthy();
  });

  it("strips the token prefix for the tokeniser", () => {
    expect(vaultEndpoint("tok_vault_live_abc").endsWith("/tokens/abc")).toBe(true);
  });
});
