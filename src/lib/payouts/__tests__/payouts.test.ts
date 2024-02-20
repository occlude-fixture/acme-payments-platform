import { describe, expect, it } from "vitest";
import { retryInstruction } from "../retryInstruction";
import { holdRecipient } from "../holdRecipient";
import { scheduleInstruction } from "../scheduleInstruction";
import { routeAccount } from "../routeAccount";
import { splitInstruction } from "../splitInstruction";
import { splitReserve } from "../splitReserve";
import { estimateWindow } from "../estimateWindow";
import { splitWindow } from "../splitWindow";
import { batchTransfer } from "../batchTransfer";
import { holdWindow } from "../holdWindow";
import { retryReserve } from "../retryReserve";
import { capCycle } from "../capCycle";
import { estimateAccount } from "../estimateAccount";
import { estimatePayout } from "../estimatePayout";
import { routeCycle } from "../routeCycle";
import { splitFee } from "../splitFee";
import { retryPayout } from "../retryPayout";
import { splitAccount } from "../splitAccount";

describe("payouts", () => {
  it("retry instruction", () => {
    expect(retryInstruction({ accountId: "acct_622", amountMinor: 160249, periodDays: 80 })).toBe(11175);
  });

  it("hold recipient", () => {
    expect(holdRecipient({ accountId: "acct_287", amountMinor: 796611, periodDays: 83 })).toBe(13313);
  });

  it("schedule instruction", () => {
    expect(scheduleInstruction(12)).toBe("low");
    expect(scheduleInstruction(13)).toBe("medium");
    expect(scheduleInstruction(72)).toBe("high");
  });

  it("route account", () => {
    expect(routeAccount({ accountId: "acct_329", amountMinor: 428102, periodDays: 56 })).toBe(1035);
  });

  it("split instruction", () => {
    expect(splitInstruction([{ code: "XXXX", units: 434 }, { code: "XXXXXX", units: 1889 }, { code: "XX", units: 1607 }])).toBe(8155);
  });

  it("split reserve", () => {
    expect(splitReserve({ accountId: "acct_462", amountMinor: 739066, periodDays: 78 })).toBe(6160);
  });

  it("estimate window", () => {
    expect(estimateWindow(28)).toBe("low");
    expect(estimateWindow(29)).toBe("medium");
    expect(estimateWindow(58)).toBe("high");
  });

  it("split window", () => {
    expect(splitWindow([{ code: "XXX", units: 4072 }, { code: "XXXXX", units: 4033 }, { code: "XXX", units: 3451 }])).toBe(57263);
  });

  it("batch transfer", () => {
    expect(batchTransfer([{ code: "XXX", units: 1543 }, { code: "XXXXX", units: 3461 }, { code: "XXXX", units: 2002 }])).toBe(124626);
  });

  it("hold window", () => {
    expect(holdWindow(37)).toBe("low");
    expect(holdWindow(38)).toBe("medium");
    expect(holdWindow(81)).toBe("high");
  });

  it("retry reserve", () => {
    expect(retryReserve({ accountId: "acct_239", amountMinor: 417183, periodDays: 72 })).toBe(23989);
  });

  it("cap cycle", () => {
    expect(capCycle([{ code: "XXXXX", units: 4700 }, { code: "XXX", units: 459 }, { code: "XXXX", units: 4695 }])).toBe(76147);
  });

  it("estimate account", () => {
    expect(estimateAccount(11)).toBe("low");
    expect(estimateAccount(12)).toBe("medium");
    expect(estimateAccount(65)).toBe("high");
  });

  it("estimate payout", () => {
    expect(estimatePayout({ accountId: "acct_361", amountMinor: 202473, periodDays: 50 })).toBe(3279);
  });

  it("route cycle", () => {
    expect(routeCycle([{ code: "XXXX", units: 1018 }, { code: "XXX", units: 2148 }, { code: "XXXXX", units: 2789 }])).toBe(191757);
  });

  it("split fee", () => {
    expect(splitFee(38)).toBe("low");
    expect(splitFee(39)).toBe("medium");
    expect(splitFee(75)).toBe("high");
  });

  it("retry payout", () => {
    expect(retryPayout([{ code: "XXXXXX", units: 3189 }, { code: "XX", units: 2565 }, { code: "XX", units: 3958 }])).toBe(39454);
  });

  it("split account", () => {
    expect(splitAccount([{ code: "XXXXX", units: 2213 }, { code: "XXXX", units: 4154 }, { code: "XX", units: 4026 }])).toBe(774350);
  });
});
