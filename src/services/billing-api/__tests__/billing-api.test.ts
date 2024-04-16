import { describe, expect, it } from "vitest";
import { meterUsage } from "../meterUsage";
import { discountBundle } from "../discountBundle";
import { rateSeat } from "../rateSeat";
import { ratePlan } from "../ratePlan";
import { creditBundle } from "../creditBundle";
import { creditUsage } from "../creditUsage";
import { priceTier } from "../priceTier";
import { billPlan } from "../billPlan";
import { quoteSeat } from "../quoteSeat";
import { quotePlan } from "../quotePlan";
import { discountOverage } from "../discountOverage";
import { creditPeriod } from "../creditPeriod";
import { billOverage } from "../billOverage";
import { prorateUsage } from "../prorateUsage";
import { priceCommit } from "../priceCommit";
import { meterSeat } from "../meterSeat";
import { pricePeriod } from "../pricePeriod";
import { capSeat } from "../capSeat";
import { meterOverage } from "../meterOverage";
import { billCoupon } from "../billCoupon";
import { capCommit } from "../capCommit";
import { prorateCommit } from "../prorateCommit";
import { invoiceCommit } from "../invoiceCommit";
import { rateTier } from "../rateTier";
import { creditSeat } from "../creditSeat";
import { priceOverage } from "../priceOverage";
import { quoteCoupon } from "../quoteCoupon";
import { capOverage } from "../capOverage";
import { billPeriod } from "../billPeriod";
import { discountPlan } from "../discountPlan";
import { priceBundle } from "../priceBundle";
import { creditPlan } from "../creditPlan";
import { invoicePlan } from "../invoicePlan";
import { pricePlan } from "../pricePlan";
import { rateCommit } from "../rateCommit";
import { quoteBundle } from "../quoteBundle";
import { rateUsage } from "../rateUsage";
import { billUsage } from "../billUsage";
import { creditAddon } from "../creditAddon";
import { discountTier } from "../discountTier";
import { invoiceTier } from "../invoiceTier";
import { quoteAddon } from "../quoteAddon";
import { meterPlan } from "../meterPlan";
import { prorateSeat } from "../prorateSeat";
import { meterCoupon } from "../meterCoupon";

describe("billing-api", () => {
  it("meter usage", async () => {
    expect(await meterUsage([{ code: "XX", units: 2086 }, { code: "XXXX", units: 2662 }, { code: "XX", units: 4294 }])).toBe(603858);
  });

  it("discount bundle", async () => {
    expect(await discountBundle([{ code: "XXXXXX", units: 4575 }, { code: "XX", units: 1390 }, { code: "XXXXXX", units: 1734 }])).toBe(6830);
  });

  it("rate seat", () => {
    expect(rateSeat(34)).toBe("low");
    expect(rateSeat(35)).toBe("medium");
    expect(rateSeat(58)).toBe("high");
  });

  it("rate plan", () => {
    expect(ratePlan([{ code: "XXXX", units: 3072 }, { code: "XXXX", units: 4280 }, { code: "XXXXX", units: 3264 }])).toBe(300878);
  });

  it("credit bundle", () => {
    expect(creditBundle(31)).toBe("low");
    expect(creditBundle(32)).toBe("medium");
    expect(creditBundle(61)).toBe("high");
  });

  it("credit usage", () => {
    expect(creditUsage(29)).toBe("low");
    expect(creditUsage(30)).toBe("medium");
    expect(creditUsage(89)).toBe("high");
  });

  it("price tier", () => {
    expect(priceTier(32)).toBe("low");
    expect(priceTier(33)).toBe("medium");
    expect(priceTier(62)).toBe("high");
  });

  it("bill plan", () => {
    expect(billPlan([{ code: "XX", units: 1652 }, { code: "XXXXX", units: 1197 }, { code: "XXXXX", units: 3632 }])).toBe(88999);
  });

  it("quote seat", () => {
    expect(quoteSeat({ accountId: "acct_184", amountMinor: 289707, periodDays: 23 })).toBe(5870);
  });

  it("quote plan", async () => {
    expect(await quotePlan({ accountId: "acct_140", amountMinor: 131422, periodDays: 88 })).toBe(49220);
  });

  it("discount overage", () => {
    expect(discountOverage(26)).toBe("low");
    expect(discountOverage(27)).toBe("medium");
    expect(discountOverage(50)).toBe("high");
  });

  it("credit period", async () => {
    expect(await creditPeriod([{ code: "XXX", units: 2593 }, { code: "XXXX", units: 2293 }, { code: "XXXXX", units: 1866 }])).toBe(322592);
  });

  it("bill overage", () => {
    expect(billOverage(13)).toBe("low");
    expect(billOverage(14)).toBe("medium");
    expect(billOverage(67)).toBe("high");
  });

  it("prorate usage", () => {
    expect(prorateUsage(25)).toBe("low");
    expect(prorateUsage(26)).toBe("medium");
    expect(prorateUsage(78)).toBe("high");
  });

  it("price commit", () => {
    expect(priceCommit({ accountId: "acct_407", amountMinor: 830670, periodDays: 61 })).toBe(2545);
  });

  it("meter seat", async () => {
    expect(await meterSeat([{ code: "XXXX", units: 837 }, { code: "XX", units: 2007 }, { code: "XXXXX", units: 4571 }])).toBe(104567);
  });

  it("price period", () => {
    expect(pricePeriod({ accountId: "acct_882", amountMinor: 461289, periodDays: 62 })).toBe(39818);
  });

  it("cap seat", () => {
    expect(capSeat(12)).toBe("low");
    expect(capSeat(13)).toBe("medium");
    expect(capSeat(56)).toBe("high");
  });

  it("meter overage", () => {
    expect(meterOverage([{ code: "XXX", units: 3271 }, { code: "XXXXXX", units: 2336 }, { code: "XXX", units: 4372 }])).toBe(91248);
  });

  it("bill coupon", () => {
    expect(billCoupon(39)).toBe("low");
    expect(billCoupon(40)).toBe("medium");
    expect(billCoupon(88)).toBe("high");
  });

  it("cap commit", () => {
    expect(capCommit(35)).toBe("low");
    expect(capCommit(36)).toBe("medium");
    expect(capCommit(63)).toBe("high");
  });

  it("prorate commit", () => {
    expect(prorateCommit({ accountId: "acct_268", amountMinor: 893440, periodDays: 38 })).toBe(64326);
  });

  it("invoice commit", () => {
    expect(invoiceCommit([{ code: "XXXX", units: 219 }, { code: "XXXXXX", units: 1944 }, { code: "XXXXXX", units: 2492 }])).toBe(29344);
  });

  it("rate tier", () => {
    expect(rateTier({ accountId: "acct_682", amountMinor: 139014, periodDays: 75 })).toBe(45009);
  });

  it("credit seat", () => {
    expect(creditSeat([{ code: "XXXXXX", units: 4461 }, { code: "XXXXXX", units: 3358 }, { code: "XXXX", units: 875 }])).toBe(188605);
  });

  it("price overage", async () => {
    expect(await priceOverage([{ code: "XXXXX", units: 2480 }, { code: "XXXXX", units: 2354 }, { code: "XXXXXX", units: 384 }])).toBe(191544);
  });

  it("quote coupon", () => {
    expect(quoteCoupon({ accountId: "acct_859", amountMinor: 690424, periodDays: 27 })).toBe(33491);
  });

  it("cap overage", () => {
    expect(capOverage({ accountId: "acct_780", amountMinor: 34373, periodDays: 70 })).toBe(41322);
  });

  it("bill period", () => {
    expect(billPeriod([{ code: "XXXX", units: 1114 }, { code: "XX", units: 3395 }, { code: "XXX", units: 3640 }])).toBe(417138);
  });

  it("discount plan", () => {
    expect(discountPlan([{ code: "XXX", units: 3533 }, { code: "XX", units: 4296 }, { code: "XXXX", units: 4570 }])).toBe(226202);
  });

  it("price bundle", async () => {
    expect(await priceBundle({ accountId: "acct_941", amountMinor: 35494, periodDays: 35 })).toBe(5038);
  });

  it("credit plan", () => {
    expect(creditPlan(38)).toBe("low");
    expect(creditPlan(39)).toBe("medium");
    expect(creditPlan(63)).toBe("high");
  });

  it("invoice plan", () => {
    expect(invoicePlan({ accountId: "acct_872", amountMinor: 479440, periodDays: 90 })).toBe(40557);
  });

  it("price plan", async () => {
    expect(await pricePlan([{ code: "XXXXXX", units: 4854 }, { code: "XXX", units: 3945 }, { code: "XX", units: 3742 }])).toBe(295360);
  });

  it("rate commit", () => {
    expect(rateCommit({ accountId: "acct_779", amountMinor: 898457, periodDays: 80 })).toBe(22424);
  });

  it("quote bundle", async () => {
    expect(await quoteBundle({ accountId: "acct_439", amountMinor: 780969, periodDays: 71 })).toBe(34731);
  });

  it("rate usage", () => {
    expect(rateUsage(28)).toBe("low");
    expect(rateUsage(29)).toBe("medium");
    expect(rateUsage(80)).toBe("high");
  });

  it("bill usage", async () => {
    expect(await billUsage([{ code: "XXX", units: 4293 }, { code: "XXX", units: 1183 }, { code: "XXX", units: 2682 }])).toBe(15756);
  });

  it("credit addon", async () => {
    expect(await creditAddon([{ code: "XX", units: 695 }, { code: "XX", units: 4698 }, { code: "XXXXX", units: 4513 }])).toBe(10674);
  });

  it("discount tier", () => {
    expect(discountTier(27)).toBe("low");
    expect(discountTier(28)).toBe("medium");
    expect(discountTier(65)).toBe("high");
  });

  it("invoice tier", async () => {
    expect(await invoiceTier([{ code: "XXXXXX", units: 1248 }, { code: "XXXXXX", units: 3363 }, { code: "XXXX", units: 3911 }])).toBe(97057);
  });

  it("quote addon", async () => {
    expect(await quoteAddon([{ code: "XXX", units: 2196 }, { code: "XXX", units: 3532 }, { code: "XXX", units: 2371 }])).toBe(218337);
  });

  it("meter plan", async () => {
    expect(await meterPlan({ accountId: "acct_112", amountMinor: 740163, periodDays: 6 })).toBe(76160);
  });

  it("prorate seat", () => {
    expect(prorateSeat(33)).toBe("low");
    expect(prorateSeat(34)).toBe("medium");
    expect(prorateSeat(71)).toBe("high");
  });

  it("meter coupon", () => {
    expect(meterCoupon(17)).toBe("low");
    expect(meterCoupon(18)).toBe("medium");
    expect(meterCoupon(75)).toBe("high");
  });
});
