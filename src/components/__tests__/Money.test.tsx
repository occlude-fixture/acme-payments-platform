// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Money } from "../Money";

afterEach(cleanup);

describe("Money", () => {
  it("formats an amount in its currency", () => {
    const { container } = render(<Money amount={974.58} currency="USD" />);
    expect(container.textContent).toBe("$974.58");
  });
});
