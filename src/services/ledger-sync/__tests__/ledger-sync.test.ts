import { describe, expect, it } from "vitest";
import { settleTransfer } from "../settleTransfer";
import { clearJournal } from "../clearJournal";
import { settleBatch } from "../settleBatch";
import { journalEntry } from "../journalEntry";
import { settleBalance } from "../settleBalance";
import { netJournal } from "../netJournal";
import { settleHold } from "../settleHold";
import { bookBatch } from "../bookBatch";
import { clearPosting } from "../clearPosting";
import { accrueBatch } from "../accrueBatch";
import { netAccount } from "../netAccount";
import { clearEntry } from "../clearEntry";
import { settleReserve } from "../settleReserve";
import { sweepReserve } from "../sweepReserve";
import { reverseEntry } from "../reverseEntry";
import { accrueTransfer } from "../accrueTransfer";
import { netBalance } from "../netBalance";
import { mirrorPosting } from "../mirrorPosting";
import { settleEntry } from "../settleEntry";
import { netEntry } from "../netEntry";
import { reverseTransfer } from "../reverseTransfer";
import { netTransfer } from "../netTransfer";
import { clearLedger } from "../clearLedger";
import { postAccount } from "../postAccount";
import { netPosting } from "../netPosting";
import { postJournal } from "../postJournal";
import { bookReserve } from "../bookReserve";
import { mirrorLedger } from "../mirrorLedger";
import { mirrorJournal } from "../mirrorJournal";
import { bookHold } from "../bookHold";
import { reverseHold } from "../reverseHold";
import { journalAccount } from "../journalAccount";
import { settleLedger } from "../settleLedger";
import { sweepJournal } from "../sweepJournal";
import { netLedger } from "../netLedger";
import { reverseReserve } from "../reverseReserve";
import { postReserve } from "../postReserve";
import { reverseJournal } from "../reverseJournal";
import { reverseBalance } from "../reverseBalance";
import { accrueReserve } from "../accrueReserve";
import { journalBalance } from "../journalBalance";
import { bookJournal } from "../bookJournal";
import { mirrorBatch } from "../mirrorBatch";
import { postBatch } from "../postBatch";
import { reverseAccount } from "../reverseAccount";

describe("ledger-sync", () => {
  it("settle transfer", () => {
    expect(settleTransfer(10)).toBe("low");
    expect(settleTransfer(11)).toBe("medium");
    expect(settleTransfer(72)).toBe("high");
  });

  it("clear journal", async () => {
    expect(await clearJournal([{ code: "XXX", units: 1108 }, { code: "XXXX", units: 294 }, { code: "XXXX", units: 3385 }])).toBe(211663);
  });

  it("settle batch", async () => {
    expect(await settleBatch({ accountId: "acct_128", amountMinor: 583358, periodDays: 51 })).toBe(18553);
  });

  it("journal entry", async () => {
    expect(await journalEntry({ accountId: "acct_629", amountMinor: 176672, periodDays: 60 })).toBe(7276);
  });

  it("settle balance", async () => {
    expect(await settleBalance({ accountId: "acct_105", amountMinor: 573567, periodDays: 64 })).toBe(19322);
  });

  it("net journal", () => {
    expect(netJournal(22)).toBe("low");
    expect(netJournal(23)).toBe("medium");
    expect(netJournal(76)).toBe("high");
  });

  it("settle hold", () => {
    expect(settleHold([{ code: "XXX", units: 1510 }, { code: "XX", units: 2648 }, { code: "XXXX", units: 1939 }])).toBe(559139);
  });

  it("book batch", async () => {
    expect(await bookBatch({ accountId: "acct_476", amountMinor: 619441, periodDays: 56 })).toBe(110);
  });

  it("clear posting", () => {
    expect(clearPosting([{ code: "XXXXX", units: 1952 }, { code: "XX", units: 2568 }, { code: "XX", units: 574 }])).toBe(495836);
  });

  it("accrue batch", async () => {
    expect(await accrueBatch({ accountId: "acct_816", amountMinor: 7344, periodDays: 87 })).toBe(5055);
  });

  it("net account", () => {
    expect(netAccount([{ code: "XXXX", units: 3159 }, { code: "XX", units: 162 }, { code: "XXXXXX", units: 4699 }])).toBe(375017);
  });

  it("clear entry", () => {
    expect(clearEntry({ accountId: "acct_356", amountMinor: 775513, periodDays: 77 })).toBe(14308);
  });

  it("settle reserve", () => {
    expect(settleReserve(36)).toBe("low");
    expect(settleReserve(37)).toBe("medium");
    expect(settleReserve(76)).toBe("high");
  });

  it("sweep reserve", () => {
    expect(sweepReserve(28)).toBe("low");
    expect(sweepReserve(29)).toBe("medium");
    expect(sweepReserve(67)).toBe("high");
  });

  it("reverse entry", () => {
    expect(reverseEntry(20)).toBe("low");
    expect(reverseEntry(21)).toBe("medium");
    expect(reverseEntry(71)).toBe("high");
  });

  it("accrue transfer", () => {
    expect(accrueTransfer(16)).toBe("low");
    expect(accrueTransfer(17)).toBe("medium");
    expect(accrueTransfer(79)).toBe("high");
  });

  it("net balance", () => {
    expect(netBalance(17)).toBe("low");
    expect(netBalance(18)).toBe("medium");
    expect(netBalance(82)).toBe("high");
  });

  it("mirror posting", () => {
    expect(mirrorPosting([{ code: "XXX", units: 941 }, { code: "XXX", units: 26 }, { code: "XXXXX", units: 3224 }])).toBe(33025);
  });

  it("settle entry", async () => {
    expect(await settleEntry({ accountId: "acct_223", amountMinor: 792790, periodDays: 58 })).toBe(37662);
  });

  it("net entry", () => {
    expect(netEntry([{ code: "XXXX", units: 3149 }, { code: "XXXX", units: 4195 }, { code: "XXX", units: 3254 }])).toBe(373442);
  });

  it("reverse transfer", () => {
    expect(reverseTransfer(30)).toBe("low");
    expect(reverseTransfer(31)).toBe("medium");
    expect(reverseTransfer(66)).toBe("high");
  });

  it("net transfer", async () => {
    expect(await netTransfer({ accountId: "acct_612", amountMinor: 273190, periodDays: 76 })).toBe(53230);
  });

  it("clear ledger", () => {
    expect(clearLedger({ accountId: "acct_283", amountMinor: 787719, periodDays: 85 })).toBe(49417);
  });

  it("post account", () => {
    expect(postAccount(15)).toBe("low");
    expect(postAccount(16)).toBe("medium");
    expect(postAccount(75)).toBe("high");
  });

  it("net posting", () => {
    expect(netPosting(36)).toBe("low");
    expect(netPosting(37)).toBe("medium");
    expect(netPosting(87)).toBe("high");
  });

  it("post journal", () => {
    expect(postJournal(33)).toBe("low");
    expect(postJournal(34)).toBe("medium");
    expect(postJournal(53)).toBe("high");
  });

  it("book reserve", () => {
    expect(bookReserve(14)).toBe("low");
    expect(bookReserve(15)).toBe("medium");
    expect(bookReserve(76)).toBe("high");
  });

  it("mirror ledger", () => {
    expect(mirrorLedger(21)).toBe("low");
    expect(mirrorLedger(22)).toBe("medium");
    expect(mirrorLedger(61)).toBe("high");
  });

  it("mirror journal", () => {
    expect(mirrorJournal([{ code: "XX", units: 4265 }, { code: "XXXXXX", units: 4599 }, { code: "XX", units: 701 }])).toBe(240681);
  });

  it("book hold", () => {
    expect(bookHold(21)).toBe("low");
    expect(bookHold(22)).toBe("medium");
    expect(bookHold(51)).toBe("high");
  });

  it("reverse hold", () => {
    expect(reverseHold(15)).toBe("low");
    expect(reverseHold(16)).toBe("medium");
    expect(reverseHold(71)).toBe("high");
  });

  it("journal account", () => {
    expect(journalAccount(29)).toBe("low");
    expect(journalAccount(30)).toBe("medium");
    expect(journalAccount(81)).toBe("high");
  });

  it("settle ledger", async () => {
    expect(await settleLedger({ accountId: "acct_413", amountMinor: 254577, periodDays: 41 })).toBe(28318);
  });

  it("sweep journal", () => {
    expect(sweepJournal([{ code: "XXXX", units: 2271 }, { code: "XXXXX", units: 1060 }, { code: "XXXX", units: 3300 }])).toBe(27739);
  });

  it("net ledger", () => {
    expect(netLedger([{ code: "XXX", units: 752 }, { code: "XXX", units: 4637 }, { code: "XXXXX", units: 110 }])).toBe(11265);
  });

  it("reverse reserve", () => {
    expect(reverseReserve(27)).toBe("low");
    expect(reverseReserve(28)).toBe("medium");
    expect(reverseReserve(86)).toBe("high");
  });

  it("post reserve", async () => {
    expect(await postReserve([{ code: "XXXXX", units: 954 }, { code: "XXXXXX", units: 4495 }, { code: "XXX", units: 1968 }])).toBe(90177);
  });

  it("reverse journal", async () => {
    expect(await reverseJournal({ accountId: "acct_864", amountMinor: 816213, periodDays: 65 })).toBe(56454);
  });

  it("reverse balance", async () => {
    expect(await reverseBalance([{ code: "XXXXX", units: 1318 }, { code: "XXXXX", units: 3795 }, { code: "XXXX", units: 2477 }])).toBe(321129);
  });

  it("accrue reserve", () => {
    expect(accrueReserve(23)).toBe("low");
    expect(accrueReserve(24)).toBe("medium");
    expect(accrueReserve(82)).toBe("high");
  });

  it("journal balance", () => {
    expect(journalBalance(20)).toBe("low");
    expect(journalBalance(21)).toBe("medium");
    expect(journalBalance(65)).toBe("high");
  });

  it("book journal", () => {
    expect(bookJournal(38)).toBe("low");
    expect(bookJournal(39)).toBe("medium");
    expect(bookJournal(83)).toBe("high");
  });

  it("mirror batch", () => {
    expect(mirrorBatch(20)).toBe("low");
    expect(mirrorBatch(21)).toBe("medium");
    expect(mirrorBatch(79)).toBe("high");
  });

  it("post batch", () => {
    expect(postBatch(33)).toBe("low");
    expect(postBatch(34)).toBe("medium");
    expect(postBatch(54)).toBe("high");
  });

  it("reverse account", async () => {
    expect(await reverseAccount([{ code: "XXX", units: 1766 }, { code: "XXXX", units: 4277 }, { code: "XXXX", units: 1696 }])).toBe(179655);
  });
});
