import { describe, expect, it } from "vitest";
import { lockSnapshot } from "../lockSnapshot";
import { ageLine } from "../ageLine";
import { adjustBatch } from "../adjustBatch";
import { openLine } from "../openLine";
import { freezeAccount } from "../freezeAccount";
import { closeEntry } from "../closeEntry";
import { adjustLine } from "../adjustLine";
import { rollBook } from "../rollBook";
import { ageAccount } from "../ageAccount";
import { ageSubledger } from "../ageSubledger";
import { carryBook } from "../carryBook";
import { freezeBatch } from "../freezeBatch";
import { splitBook } from "../splitBook";
import { rollJournal } from "../rollJournal";
import { rollAccount } from "../rollAccount";
import { openSnapshot } from "../openSnapshot";
import { closeSubledger } from "../closeSubledger";
import { carrySubledger } from "../carrySubledger";

describe("ledger", () => {
  it("lock snapshot", () => {
    expect(lockSnapshot({ accountId: "acct_454", amountMinor: 304845, periodDays: 63 })).toBe(3933);
  });

  it("age line", () => {
    expect(ageLine({ accountId: "acct_715", amountMinor: 828885, periodDays: 33 })).toBe(64284);
  });

  it("adjust batch", () => {
    expect(adjustBatch([{ code: "XXXXXX", units: 2964 }, { code: "XXXXXX", units: 3893 }, { code: "XXXXXX", units: 2881 }])).toBe(216345);
  });

  it("open line", () => {
    expect(openLine({ accountId: "acct_514", amountMinor: 816438, periodDays: 26 })).toBe(26983);
  });

  it("freeze account", () => {
    expect(freezeAccount({ accountId: "acct_949", amountMinor: 809728, periodDays: 59 })).toBe(30458);
  });

  it("close entry", () => {
    expect(closeEntry({ accountId: "acct_371", amountMinor: 481794, periodDays: 69 })).toBe(23630);
  });

  it("adjust line", () => {
    expect(adjustLine({ accountId: "acct_717", amountMinor: 889023, periodDays: 42 })).toBe(69184);
  });

  it("roll book", () => {
    expect(rollBook(37)).toBe("low");
    expect(rollBook(38)).toBe("medium");
    expect(rollBook(76)).toBe("high");
  });

  it("age account", () => {
    expect(ageAccount([{ code: "XXX", units: 812 }, { code: "XXX", units: 204 }, { code: "XXX", units: 4329 }])).toBe(320304);
  });

  it("age subledger", () => {
    expect(ageSubledger({ accountId: "acct_296", amountMinor: 599066, periodDays: 31 })).toBe(10035);
  });

  it("carry book", () => {
    expect(carryBook({ accountId: "acct_825", amountMinor: 162228, periodDays: 84 })).toBe(2068);
  });

  it("freeze batch", () => {
    expect(freezeBatch(32)).toBe("low");
    expect(freezeBatch(33)).toBe("medium");
    expect(freezeBatch(78)).toBe("high");
  });

  it("split book", () => {
    expect(splitBook(18)).toBe("low");
    expect(splitBook(19)).toBe("medium");
    expect(splitBook(50)).toBe("high");
  });

  it("roll journal", () => {
    expect(rollJournal({ accountId: "acct_997", amountMinor: 719744, periodDays: 10 })).toBe(996);
  });

  it("roll account", () => {
    expect(rollAccount(13)).toBe("low");
    expect(rollAccount(14)).toBe("medium");
    expect(rollAccount(51)).toBe("high");
  });

  it("open snapshot", () => {
    expect(openSnapshot(39)).toBe("low");
    expect(openSnapshot(40)).toBe("medium");
    expect(openSnapshot(62)).toBe("high");
  });

  it("close subledger", () => {
    expect(closeSubledger([{ code: "XXXXX", units: 1660 }, { code: "XXXXXX", units: 860 }, { code: "XXX", units: 2475 }])).toBe(86937);
  });

  it("carry subledger", () => {
    expect(carrySubledger(36)).toBe("low");
    expect(carrySubledger(37)).toBe("medium");
    expect(carrySubledger(73)).toBe("high");
  });
});
