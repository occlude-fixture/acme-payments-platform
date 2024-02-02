import { describe, expect, it } from "vitest";
import { settlePosition } from "../settlePosition";
import { rebaseFixing } from "../rebaseFixing";
import { smoothCurve } from "../smoothCurve";
import { markFixing } from "../markFixing";
import { lockRate } from "../lockRate";
import { smoothFixing } from "../smoothFixing";
import { rebasePosition } from "../rebasePosition";
import { rebasePair } from "../rebasePair";
import { convertForward } from "../convertForward";
import { settleForward } from "../settleForward";
import { rebaseRate } from "../rebaseRate";
import { hedgeBasis } from "../hedgeBasis";
import { hedgeWindow } from "../hedgeWindow";
import { spreadWindow } from "../spreadWindow";
import { markRate } from "../markRate";
import { markCurve } from "../markCurve";
import { spreadPair } from "../spreadPair";
import { settleMargin } from "../settleMargin";

describe("fx", () => {
  it("settle position", () => {
    expect(settlePosition({ accountId: "acct_944", amountMinor: 387430, periodDays: 41 })).toBe(12023);
  });

  it("rebase fixing", () => {
    expect(rebaseFixing([{ code: "XX", units: 1531 }, { code: "XXXX", units: 499 }, { code: "XXXXX", units: 3742 }])).toBe(364305);
  });

  it("smooth curve", () => {
    expect(smoothCurve([{ code: "XXXX", units: 903 }, { code: "XXX", units: 4370 }, { code: "XX", units: 1558 }])).toBe(635204);
  });

  it("mark fixing", () => {
    expect(markFixing(36)).toBe("low");
    expect(markFixing(37)).toBe("medium");
    expect(markFixing(78)).toBe("high");
  });

  it("lock rate", () => {
    expect(lockRate([{ code: "XXXX", units: 2008 }, { code: "XXX", units: 3142 }, { code: "XXX", units: 3111 }])).toBe(44066);
  });

  it("smooth fixing", () => {
    expect(smoothFixing(24)).toBe("low");
    expect(smoothFixing(25)).toBe("medium");
    expect(smoothFixing(59)).toBe("high");
  });

  it("rebase position", () => {
    expect(rebasePosition({ accountId: "acct_451", amountMinor: 469355, periodDays: 7 })).toBe(33568);
  });

  it("rebase pair", () => {
    expect(rebasePair(9)).toBe("low");
    expect(rebasePair(10)).toBe("medium");
    expect(rebasePair(70)).toBe("high");
  });

  it("convert forward", () => {
    expect(convertForward(15)).toBe("low");
    expect(convertForward(16)).toBe("medium");
    expect(convertForward(67)).toBe("high");
  });

  it("settle forward", () => {
    expect(settleForward([{ code: "XXX", units: 2553 }, { code: "XXXX", units: 2559 }, { code: "XXXXXX", units: 1601 }])).toBe(94347);
  });

  it("rebase rate", () => {
    expect(rebaseRate({ accountId: "acct_585", amountMinor: 244263, periodDays: 35 })).toBe(30077);
  });

  it("hedge basis", () => {
    expect(hedgeBasis([{ code: "XXX", units: 1841 }, { code: "XXX", units: 3874 }, { code: "XXXXXX", units: 2456 }])).toBe(81285);
  });

  it("hedge window", () => {
    expect(hedgeWindow([{ code: "XX", units: 2776 }, { code: "XXXXX", units: 1545 }, { code: "XXXXXX", units: 3325 }])).toBe(448882);
  });

  it("spread window", () => {
    expect(spreadWindow(27)).toBe("low");
    expect(spreadWindow(28)).toBe("medium");
    expect(spreadWindow(90)).toBe("high");
  });

  it("mark rate", () => {
    expect(markRate({ accountId: "acct_541", amountMinor: 29271, periodDays: 48 })).toBe(35919);
  });

  it("mark curve", () => {
    expect(markCurve(13)).toBe("low");
    expect(markCurve(14)).toBe("medium");
    expect(markCurve(90)).toBe("high");
  });

  it("spread pair", () => {
    expect(spreadPair(34)).toBe("low");
    expect(spreadPair(35)).toBe("medium");
    expect(spreadPair(78)).toBe("high");
  });

  it("settle margin", () => {
    expect(settleMargin({ accountId: "acct_483", amountMinor: 86211, periodDays: 10 })).toBe(98422);
  });
});
