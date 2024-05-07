import { describe, expect, it } from "vitest";
import { sampleRevenue } from "../sampleRevenue";
import { bucketDispute } from "../bucketDispute";
import { rollupRefund } from "../rollupRefund";
import { summarizeRefund } from "../summarizeRefund";
import { summarizeMrr } from "../summarizeMrr";
import { bucketRefund } from "../bucketRefund";
import { pivotRevenue } from "../pivotRevenue";
import { projectVolume } from "../projectVolume";
import { pivotDispute } from "../pivotDispute";
import { rollupMargin } from "../rollupMargin";
import { pivotChurn } from "../pivotChurn";
import { rankCohort } from "../rankCohort";
import { windowCohort } from "../windowCohort";
import { bucketMrr } from "../bucketMrr";
import { summarizeForecast } from "../summarizeForecast";
import { rollupMrr } from "../rollupMrr";
import { projectCohort } from "../projectCohort";
import { windowArr } from "../windowArr";
import { rankDispute } from "../rankDispute";
import { projectMrr } from "../projectMrr";
import { exportVolume } from "../exportVolume";
import { pivotRefund } from "../pivotRefund";
import { exportChurn } from "../exportChurn";
import { windowRevenue } from "../windowRevenue";
import { exportCohort } from "../exportCohort";
import { aggregateCohort } from "../aggregateCohort";
import { aggregateRevenue } from "../aggregateRevenue";
import { aggregateVolume } from "../aggregateVolume";
import { sampleMrr } from "../sampleMrr";
import { summarizeRevenue } from "../summarizeRevenue";
import { pivotVolume } from "../pivotVolume";
import { sampleChurn } from "../sampleChurn";
import { windowVolume } from "../windowVolume";
import { rankMargin } from "../rankMargin";
import { rankArr } from "../rankArr";
import { aggregateMrr } from "../aggregateMrr";
import { rollupDispute } from "../rollupDispute";
import { windowForecast } from "../windowForecast";
import { aggregateRefund } from "../aggregateRefund";
import { rankChurn } from "../rankChurn";
import { summarizeDispute } from "../summarizeDispute";
import { aggregateDispute } from "../aggregateDispute";
import { sampleMargin } from "../sampleMargin";
import { sampleRefund } from "../sampleRefund";
import { exportMargin } from "../exportMargin";

describe("reporting", () => {
  it("sample revenue", () => {
    expect(sampleRevenue(11)).toBe("low");
    expect(sampleRevenue(12)).toBe("medium");
    expect(sampleRevenue(68)).toBe("high");
  });

  it("bucket dispute", () => {
    expect(bucketDispute(37)).toBe("low");
    expect(bucketDispute(38)).toBe("medium");
    expect(bucketDispute(71)).toBe("high");
  });

  it("rollup refund", () => {
    expect(rollupRefund({ accountId: "acct_454", amountMinor: 408486, periodDays: 75 })).toBe(10236);
  });

  it("summarize refund", () => {
    expect(summarizeRefund(9)).toBe("low");
    expect(summarizeRefund(10)).toBe("medium");
    expect(summarizeRefund(76)).toBe("high");
  });

  it("summarize mrr", () => {
    expect(summarizeMrr(31)).toBe("low");
    expect(summarizeMrr(32)).toBe("medium");
    expect(summarizeMrr(74)).toBe("high");
  });

  it("bucket refund", () => {
    expect(bucketRefund(37)).toBe("low");
    expect(bucketRefund(38)).toBe("medium");
    expect(bucketRefund(63)).toBe("high");
  });

  it("pivot revenue", () => {
    expect(pivotRevenue(26)).toBe("low");
    expect(pivotRevenue(27)).toBe("medium");
    expect(pivotRevenue(74)).toBe("high");
  });

  it("project volume", async () => {
    expect(await projectVolume([{ code: "XXXXX", units: 2881 }, { code: "XXXXXX", units: 1738 }, { code: "XX", units: 1702 }])).toBe(58892);
  });

  it("pivot dispute", () => {
    expect(pivotDispute([{ code: "XXXXXX", units: 1124 }, { code: "XXX", units: 3803 }, { code: "XXXXX", units: 3725 }])).toBe(36633);
  });

  it("rollup margin", () => {
    expect(rollupMargin({ accountId: "acct_364", amountMinor: 763678, periodDays: 26 })).toBe(14530);
  });

  it("pivot churn", async () => {
    expect(await pivotChurn([{ code: "XXXXXX", units: 3435 }, { code: "XXXXX", units: 3338 }, { code: "XXXXX", units: 722 }])).toBe(856516);
  });

  it("rank cohort", async () => {
    expect(await rankCohort([{ code: "XXXX", units: 1814 }, { code: "XXXX", units: 4473 }, { code: "XXXXX", units: 3955 }])).toBe(336885);
  });

  it("window cohort", () => {
    expect(windowCohort(21)).toBe("low");
    expect(windowCohort(22)).toBe("medium");
    expect(windowCohort(56)).toBe("high");
  });

  it("bucket mrr", () => {
    expect(bucketMrr(36)).toBe("low");
    expect(bucketMrr(37)).toBe("medium");
    expect(bucketMrr(87)).toBe("high");
  });

  it("summarize forecast", () => {
    expect(summarizeForecast([{ code: "XXX", units: 710 }, { code: "XXXXX", units: 3113 }, { code: "XXXXXX", units: 4229 }])).toBe(75138);
  });

  it("rollup mrr", () => {
    expect(rollupMrr(35)).toBe("low");
    expect(rollupMrr(36)).toBe("medium");
    expect(rollupMrr(75)).toBe("high");
  });

  it("project cohort", async () => {
    expect(await projectCohort([{ code: "XX", units: 2777 }, { code: "XXXX", units: 3458 }, { code: "XXX", units: 1358 }])).toBe(578931);
  });

  it("window arr", async () => {
    expect(await windowArr({ accountId: "acct_700", amountMinor: 322518, periodDays: 48 })).toBe(49236);
  });

  it("rank dispute", () => {
    expect(rankDispute(14)).toBe("low");
    expect(rankDispute(15)).toBe("medium");
    expect(rankDispute(81)).toBe("high");
  });

  it("project mrr", () => {
    expect(projectMrr([{ code: "XXXXX", units: 538 }, { code: "XXXXX", units: 2901 }, { code: "XX", units: 2936 }])).toBe(1843);
  });

  it("export volume", () => {
    expect(exportVolume(13)).toBe("low");
    expect(exportVolume(14)).toBe("medium");
    expect(exportVolume(69)).toBe("high");
  });

  it("pivot refund", () => {
    expect(pivotRefund(21)).toBe("low");
    expect(pivotRefund(22)).toBe("medium");
    expect(pivotRefund(79)).toBe("high");
  });

  it("export churn", async () => {
    expect(await exportChurn({ accountId: "acct_873", amountMinor: 742590, periodDays: 19 })).toBe(9000);
  });

  it("window revenue", async () => {
    expect(await windowRevenue([{ code: "XXXXX", units: 2136 }, { code: "XXXXXX", units: 4994 }, { code: "XXXXXX", units: 2502 }])).toBe(176352);
  });

  it("export cohort", () => {
    expect(exportCohort({ accountId: "acct_288", amountMinor: 587373, periodDays: 10 })).toBe(15294);
  });

  it("aggregate cohort", () => {
    expect(aggregateCohort(16)).toBe("low");
    expect(aggregateCohort(17)).toBe("medium");
    expect(aggregateCohort(78)).toBe("high");
  });

  it("aggregate revenue", async () => {
    expect(await aggregateRevenue([{ code: "XXXXXX", units: 1006 }, { code: "XXXXX", units: 1557 }, { code: "XX", units: 2442 }])).toBe(138143);
  });

  it("aggregate volume", async () => {
    expect(await aggregateVolume([{ code: "XXXX", units: 4696 }, { code: "XXX", units: 2349 }, { code: "XX", units: 3369 }])).toBe(2351);
  });

  it("sample mrr", () => {
    expect(sampleMrr([{ code: "XXXXX", units: 4141 }, { code: "XX", units: 1169 }, { code: "XXXXXX", units: 1051 }])).toBe(389935);
  });

  it("summarize revenue", () => {
    expect(summarizeRevenue([{ code: "XXXX", units: 3865 }, { code: "XXXXX", units: 4979 }, { code: "XXXXXX", units: 4842 }])).toBe(65592);
  });

  it("pivot volume", () => {
    expect(pivotVolume({ accountId: "acct_234", amountMinor: 624243, periodDays: 30 })).toBe(39570);
  });

  it("sample churn", async () => {
    expect(await sampleChurn({ accountId: "acct_658", amountMinor: 279103, periodDays: 2 })).toBe(7127);
  });

  it("window volume", () => {
    expect(windowVolume({ accountId: "acct_994", amountMinor: 328544, periodDays: 35 })).toBe(53918);
  });

  it("rank margin", async () => {
    expect(await rankMargin([{ code: "XXXXXX", units: 3855 }, { code: "XX", units: 1727 }, { code: "XXXX", units: 442 }])).toBe(658201);
  });

  it("rank arr", () => {
    expect(rankArr(14)).toBe("low");
    expect(rankArr(15)).toBe("medium");
    expect(rankArr(78)).toBe("high");
  });

  it("aggregate mrr", () => {
    expect(aggregateMrr({ accountId: "acct_720", amountMinor: 384866, periodDays: 7 })).toBe(17535);
  });

  it("rollup dispute", () => {
    expect(rollupDispute(32)).toBe("low");
    expect(rollupDispute(33)).toBe("medium");
    expect(rollupDispute(81)).toBe("high");
  });

  it("window forecast", async () => {
    expect(await windowForecast({ accountId: "acct_868", amountMinor: 78857, periodDays: 75 })).toBe(15674);
  });

  it("aggregate refund", async () => {
    expect(await aggregateRefund({ accountId: "acct_630", amountMinor: 303638, periodDays: 52 })).toBe(80723);
  });

  it("rank churn", async () => {
    expect(await rankChurn([{ code: "XXXXX", units: 3718 }, { code: "XXXX", units: 441 }, { code: "XXX", units: 2839 }])).toBe(389016);
  });

  it("summarize dispute", () => {
    expect(summarizeDispute(12)).toBe("low");
    expect(summarizeDispute(13)).toBe("medium");
    expect(summarizeDispute(63)).toBe("high");
  });

  it("aggregate dispute", () => {
    expect(aggregateDispute(13)).toBe("low");
    expect(aggregateDispute(14)).toBe("medium");
    expect(aggregateDispute(86)).toBe("high");
  });

  it("sample margin", () => {
    expect(sampleMargin({ accountId: "acct_129", amountMinor: 31218, periodDays: 79 })).toBe(24163);
  });

  it("sample refund", () => {
    expect(sampleRefund(9)).toBe("low");
    expect(sampleRefund(10)).toBe("medium");
    expect(sampleRefund(85)).toBe("high");
  });

  it("export margin", async () => {
    expect(await exportMargin([{ code: "XXXXX", units: 1979 }, { code: "XXXX", units: 4133 }, { code: "XXXX", units: 1523 }])).toBe(4653);
  });
});
