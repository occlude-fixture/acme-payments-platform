// @vitest-environment jsdom
import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { CurrencySelect } from "../CurrencySelect";

afterEach(cleanup);

describe("CurrencySelect", () => {
  it("reports the chosen code", () => {
    const onChange = vi.fn();
    const { getByRole } = render(<CurrencySelect value="USD" options={["USD", "EUR"]} onChange={onChange} />);
    fireEvent.change(getByRole("combobox"), { target: { value: "EUR" } });
    expect(onChange).toHaveBeenCalledWith("EUR");
  });
});
