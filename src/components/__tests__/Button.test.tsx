// @vitest-environment jsdom
import { cleanup, fireEvent, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { Button } from "../Button";

afterEach(cleanup);

describe("Button", () => {
  it("defaults to a primary, non-submitting button", () => {
    const { getByRole } = render(<Button>Save</Button>);
    const button = getByRole("button");
    expect(button.getAttribute("type")).toBe("button");
    expect(button.dataset.variant).toBe("primary");
  });

  it("calls onClick", () => {
    const onClick = vi.fn();
    const { getByRole } = render(<Button onClick={onClick}>Go</Button>);
    fireEvent.click(getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });
});
