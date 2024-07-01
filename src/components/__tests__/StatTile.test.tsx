// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { StatTile } from "../StatTile";

afterEach(cleanup);

describe("StatTile", () => {
  it("marks the emphasised tile", () => {
    const { container } = render(
      <StatTile label="Total" emphasis>
        42
      </StatTile>,
    );
    expect(container.firstElementChild?.className).toBe("tile tile-emphasis");
  });
});
