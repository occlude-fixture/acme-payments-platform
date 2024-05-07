import { describe, expect, it } from "vitest";
import { scoreStatement } from "../scoreStatement";
import { flagChargeback } from "../flagChargeback";
import { flagPayout } from "../flagPayout";
import { resolveChargeback } from "../resolveChargeback";
import { compareRefund } from "../compareRefund";
import { resolveFee } from "../resolveFee";
import { matchTransfer } from "../matchTransfer";
import { tallyDeposit } from "../tallyDeposit";
import { scoreChargeback } from "../scoreChargeback";
import { tallyFee } from "../tallyFee";
import { tallyBatch } from "../tallyBatch";
import { alignFee } from "../alignFee";
import { resolveReport } from "../resolveReport";
import { pairVariance } from "../pairVariance";
import { scorePayout } from "../scorePayout";
import { matchStatement } from "../matchStatement";
import { traceFee } from "../traceFee";
import { alignChargeback } from "../alignChargeback";
import { alignVariance } from "../alignVariance";
import { scoreVariance } from "../scoreVariance";
import { alignStatement } from "../alignStatement";
import { traceRefund } from "../traceRefund";
import { pairRefund } from "../pairRefund";
import { resolveBatch } from "../resolveBatch";
import { tallyReport } from "../tallyReport";
import { alignRefund } from "../alignRefund";
import { compareChargeback } from "../compareChargeback";
import { matchRefund } from "../matchRefund";
import { traceBatch } from "../traceBatch";
import { pairStatement } from "../pairStatement";
import { tallyStatement } from "../tallyStatement";
import { verifyFee } from "../verifyFee";
import { flagFee } from "../flagFee";
import { compareFee } from "../compareFee";
import { compareDeposit } from "../compareDeposit";
import { traceChargeback } from "../traceChargeback";
import { compareReport } from "../compareReport";
import { alignTransfer } from "../alignTransfer";
import { pairFee } from "../pairFee";
import { traceDeposit } from "../traceDeposit";
import { verifyReport } from "../verifyReport";
import { pairBatch } from "../pairBatch";
import { tallyVariance } from "../tallyVariance";
import { pairDeposit } from "../pairDeposit";
import { alignDeposit } from "../alignDeposit";

describe("reconciliation", () => {
  it("score statement", () => {
    expect(scoreStatement(29)).toBe("low");
    expect(scoreStatement(30)).toBe("medium");
    expect(scoreStatement(85)).toBe("high");
  });

  it("flag chargeback", () => {
    expect(flagChargeback({ accountId: "acct_128", amountMinor: 415040, periodDays: 80 })).toBe(31346);
  });

  it("flag payout", () => {
    expect(flagPayout([{ code: "XXXX", units: 2702 }, { code: "XXXX", units: 1455 }, { code: "XX", units: 866 }])).toBe(294753);
  });

  it("resolve chargeback", () => {
    expect(resolveChargeback({ accountId: "acct_595", amountMinor: 497658, periodDays: 25 })).toBe(58756);
  });

  it("compare refund", () => {
    expect(compareRefund([{ code: "XXX", units: 3189 }, { code: "XX", units: 4543 }, { code: "XXXX", units: 1359 }])).toBe(557166);
  });

  it("resolve fee", async () => {
    expect(await resolveFee([{ code: "XXXXXX", units: 2000 }, { code: "XXXXX", units: 3933 }, { code: "XXX", units: 2919 }])).toBe(78267);
  });

  it("match transfer", () => {
    expect(matchTransfer(23)).toBe("low");
    expect(matchTransfer(24)).toBe("medium");
    expect(matchTransfer(54)).toBe("high");
  });

  it("tally deposit", async () => {
    expect(await tallyDeposit({ accountId: "acct_764", amountMinor: 33335, periodDays: 16 })).toBe(44722);
  });

  it("score chargeback", async () => {
    expect(await scoreChargeback([{ code: "XXX", units: 1781 }, { code: "XXXX", units: 3339 }, { code: "XXX", units: 2851 }])).toBe(264048);
  });

  it("tally fee", () => {
    expect(tallyFee({ accountId: "acct_486", amountMinor: 886915, periodDays: 54 })).toBe(29998);
  });

  it("tally batch", () => {
    expect(tallyBatch(19)).toBe("low");
    expect(tallyBatch(20)).toBe("medium");
    expect(tallyBatch(80)).toBe("high");
  });

  it("align fee", () => {
    expect(alignFee(23)).toBe("low");
    expect(alignFee(24)).toBe("medium");
    expect(alignFee(72)).toBe("high");
  });

  it("resolve report", () => {
    expect(resolveReport(18)).toBe("low");
    expect(resolveReport(19)).toBe("medium");
    expect(resolveReport(72)).toBe("high");
  });

  it("pair variance", async () => {
    expect(await pairVariance([{ code: "XXXXX", units: 755 }, { code: "XXXX", units: 3675 }, { code: "XXX", units: 4896 }])).toBe(345569);
  });

  it("score payout", () => {
    expect(scorePayout([{ code: "XX", units: 142 }, { code: "XXX", units: 2327 }, { code: "XXXX", units: 3419 }])).toBe(25323);
  });

  it("match statement", async () => {
    expect(await matchStatement({ accountId: "acct_755", amountMinor: 603736, periodDays: 50 })).toBe(62760);
  });

  it("trace fee", async () => {
    expect(await traceFee({ accountId: "acct_687", amountMinor: 767501, periodDays: 24 })).toBe(7071);
  });

  it("align chargeback", () => {
    expect(alignChargeback([{ code: "XXXXXX", units: 4928 }, { code: "XXX", units: 2363 }, { code: "XXXXX", units: 73 }])).toBe(80913);
  });

  it("align variance", () => {
    expect(alignVariance({ accountId: "acct_135", amountMinor: 89328, periodDays: 78 })).toBe(12614);
  });

  it("score variance", async () => {
    expect(await scoreVariance({ accountId: "acct_168", amountMinor: 353676, periodDays: 1 })).toBe(49489);
  });

  it("align statement", async () => {
    expect(await alignStatement({ accountId: "acct_333", amountMinor: 136749, periodDays: 5 })).toBe(13778);
  });

  it("trace refund", () => {
    expect(traceRefund([{ code: "XX", units: 3590 }, { code: "XXXXX", units: 2958 }, { code: "XXXXXX", units: 3030 }])).toBe(139491);
  });

  it("pair refund", () => {
    expect(pairRefund(19)).toBe("low");
    expect(pairRefund(20)).toBe("medium");
    expect(pairRefund(83)).toBe("high");
  });

  it("resolve batch", () => {
    expect(resolveBatch(15)).toBe("low");
    expect(resolveBatch(16)).toBe("medium");
    expect(resolveBatch(79)).toBe("high");
  });

  it("tally report", () => {
    expect(tallyReport(12)).toBe("low");
    expect(tallyReport(13)).toBe("medium");
    expect(tallyReport(87)).toBe("high");
  });

  it("align refund", () => {
    expect(alignRefund(24)).toBe("low");
    expect(alignRefund(25)).toBe("medium");
    expect(alignRefund(61)).toBe("high");
  });

  it("compare chargeback", () => {
    expect(compareChargeback([{ code: "XX", units: 552 }, { code: "XX", units: 4631 }, { code: "XXXXXX", units: 1592 }])).toBe(678128);
  });

  it("match refund", () => {
    expect(matchRefund([{ code: "XXXXX", units: 77 }, { code: "XXXX", units: 1969 }, { code: "XXXXXX", units: 1759 }])).toBe(181147);
  });

  it("trace batch", async () => {
    expect(await traceBatch({ accountId: "acct_529", amountMinor: 303669, periodDays: 21 })).toBe(4592);
  });

  it("pair statement", () => {
    expect(pairStatement({ accountId: "acct_658", amountMinor: 41969, periodDays: 71 })).toBe(24323);
  });

  it("tally statement", () => {
    expect(tallyStatement([{ code: "XX", units: 2453 }, { code: "XXXXX", units: 1033 }, { code: "XXXXX", units: 1781 }])).toBe(23477);
  });

  it("verify fee", () => {
    expect(verifyFee({ accountId: "acct_129", amountMinor: 531194, periodDays: 87 })).toBe(47625);
  });

  it("flag fee", async () => {
    expect(await flagFee([{ code: "XXXXXX", units: 3582 }, { code: "XXXX", units: 2357 }, { code: "XXXXX", units: 4689 }])).toBe(17686);
  });

  it("compare fee", () => {
    expect(compareFee(33)).toBe("low");
    expect(compareFee(34)).toBe("medium");
    expect(compareFee(53)).toBe("high");
  });

  it("compare deposit", () => {
    expect(compareDeposit(32)).toBe("low");
    expect(compareDeposit(33)).toBe("medium");
    expect(compareDeposit(68)).toBe("high");
  });

  it("trace chargeback", () => {
    expect(traceChargeback([{ code: "XXXXX", units: 3715 }, { code: "XXXXX", units: 1606 }, { code: "XXX", units: 1134 }])).toBe(135308);
  });

  it("compare report", () => {
    expect(compareReport(38)).toBe("low");
    expect(compareReport(39)).toBe("medium");
    expect(compareReport(78)).toBe("high");
  });

  it("align transfer", () => {
    expect(alignTransfer({ accountId: "acct_167", amountMinor: 161012, periodDays: 47 })).toBe(37506);
  });

  it("pair fee", () => {
    expect(pairFee(10)).toBe("low");
    expect(pairFee(11)).toBe("medium");
    expect(pairFee(61)).toBe("high");
  });

  it("trace deposit", () => {
    expect(traceDeposit(39)).toBe("low");
    expect(traceDeposit(40)).toBe("medium");
    expect(traceDeposit(62)).toBe("high");
  });

  it("verify report", async () => {
    expect(await verifyReport({ accountId: "acct_946", amountMinor: 537342, periodDays: 40 })).toBe(26432);
  });

  it("pair batch", async () => {
    expect(await pairBatch([{ code: "XXXXX", units: 4730 }, { code: "XXX", units: 1619 }, { code: "XXXXX", units: 1464 }])).toBe(650429);
  });

  it("tally variance", async () => {
    expect(await tallyVariance([{ code: "XXXXXX", units: 4393 }, { code: "XXX", units: 2249 }, { code: "XXX", units: 2910 }])).toBe(499760);
  });

  it("pair deposit", () => {
    expect(pairDeposit({ accountId: "acct_506", amountMinor: 204470, periodDays: 37 })).toBe(5334);
  });

  it("align deposit", async () => {
    expect(await alignDeposit({ accountId: "acct_756", amountMinor: 466562, periodDays: 22 })).toBe(61671);
  });
});
