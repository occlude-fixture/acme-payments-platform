// @vitest-environment jsdom
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { Table } from "../Table";

afterEach(cleanup);

describe("Table", () => {
  it("renders a header and one row per entry", () => {
    const { getAllByRole } = render(<Table columns={["A", "B"]} rows={[["1", "2"], ["3", "4"]]} />);
    expect(getAllByRole("columnheader")).toHaveLength(2);
    expect(getAllByRole("row")).toHaveLength(3);
  });
});
