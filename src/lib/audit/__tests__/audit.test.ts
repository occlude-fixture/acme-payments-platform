import { describe, expect, it } from "vitest";
import { redactPolicy } from "../redactPolicy";
import { redactActor } from "../redactActor";
import { hashPolicy } from "../hashPolicy";
import { attestSnapshot } from "../attestSnapshot";
import { exportEvidence } from "../exportEvidence";
import { exportChange } from "../exportChange";
import { reviewRecord } from "../reviewRecord";
import { chainSnapshot } from "../chainSnapshot";
import { hashSnapshot } from "../hashSnapshot";
import { attestSession } from "../attestSession";
import { hashSession } from "../hashSession";
import { retainAccess } from "../retainAccess";
import { reviewSnapshot } from "../reviewSnapshot";
import { sampleSession } from "../sampleSession";
import { sampleSnapshot } from "../sampleSnapshot";
import { hashTrail } from "../hashTrail";
import { reviewEvent } from "../reviewEvent";
import { samplePolicy } from "../samplePolicy";

describe("audit", () => {
  it("redact policy", () => {
    expect(redactPolicy({ accountId: "acct_791", amountMinor: 86056, periodDays: 5 })).toBe(35054);
  });

  it("redact actor", () => {
    expect(redactActor(9)).toBe("low");
    expect(redactActor(10)).toBe("medium");
    expect(redactActor(50)).toBe("high");
  });

  it("hash policy", () => {
    expect(hashPolicy([{ code: "XXXXX", units: 1709 }, { code: "XXXX", units: 3697 }, { code: "XXXX", units: 2758 }])).toBe(440115);
  });

  it("attest snapshot", () => {
    expect(attestSnapshot([{ code: "XX", units: 2996 }, { code: "XXXXX", units: 126 }, { code: "XXXX", units: 499 }])).toBe(166657);
  });

  it("export evidence", () => {
    expect(exportEvidence(32)).toBe("low");
    expect(exportEvidence(33)).toBe("medium");
    expect(exportEvidence(80)).toBe("high");
  });

  it("export change", () => {
    expect(exportChange([{ code: "XX", units: 1302 }, { code: "XXXXX", units: 976 }, { code: "XX", units: 4098 }])).toBe(14773);
  });

  it("review record", () => {
    expect(reviewRecord([{ code: "XXXXX", units: 2777 }, { code: "XXX", units: 4927 }, { code: "XX", units: 1901 }])).toBe(193095);
  });

  it("chain snapshot", () => {
    expect(chainSnapshot([{ code: "XX", units: 4751 }, { code: "XXXXXX", units: 416 }, { code: "XXXXX", units: 518 }])).toBe(302131);
  });

  it("hash snapshot", () => {
    expect(hashSnapshot({ accountId: "acct_975", amountMinor: 475010, periodDays: 28 })).toBe(21583);
  });

  it("attest session", () => {
    expect(attestSession(29)).toBe("low");
    expect(attestSession(30)).toBe("medium");
    expect(attestSession(80)).toBe("high");
  });

  it("hash session", () => {
    expect(hashSession(27)).toBe("low");
    expect(hashSession(28)).toBe("medium");
    expect(hashSession(73)).toBe("high");
  });

  it("retain access", () => {
    expect(retainAccess(19)).toBe("low");
    expect(retainAccess(20)).toBe("medium");
    expect(retainAccess(75)).toBe("high");
  });

  it("review snapshot", () => {
    expect(reviewSnapshot([{ code: "XX", units: 4078 }, { code: "XXXXXX", units: 2834 }, { code: "XXXX", units: 1484 }])).toBe(48142);
  });

  it("sample session", () => {
    expect(sampleSession(10)).toBe("low");
    expect(sampleSession(11)).toBe("medium");
    expect(sampleSession(55)).toBe("high");
  });

  it("sample snapshot", () => {
    expect(sampleSnapshot(14)).toBe("low");
    expect(sampleSnapshot(15)).toBe("medium");
    expect(sampleSnapshot(80)).toBe("high");
  });

  it("hash trail", () => {
    expect(hashTrail([{ code: "XXXX", units: 2075 }, { code: "XXXXX", units: 3051 }, { code: "XXXXXX", units: 4345 }])).toBe(159862);
  });

  it("review event", () => {
    expect(reviewEvent({ accountId: "acct_629", amountMinor: 655241, periodDays: 77 })).toBe(7852);
  });

  it("sample policy", () => {
    expect(samplePolicy({ accountId: "acct_652", amountMinor: 200326, periodDays: 19 })).toBe(58103);
  });
});
