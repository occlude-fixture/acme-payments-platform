// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Badge } from "../Badge";

afterEach(cleanup);

describe("Badge", () => {
  it("renders its tone", () => {
    const { getByText } = render(<Badge tone="success">paid</Badge>);
    expect(getByText("paid").dataset.tone).toBe("success");
  });
});
