import { describe, expect, it } from "vitest";
import { grossRegion } from "../grossRegion";
import { roundRate } from "../roundRate";
import { sourceVat } from "../sourceVat";
import { estimateThreshold } from "../estimateThreshold";
import { estimateWithholding } from "../estimateWithholding";
import { reverseVat } from "../reverseVat";
import { roundRegion } from "../roundRegion";
import { roundWithholding } from "../roundWithholding";
import { exemptVat } from "../exemptVat";
import { grossExemption } from "../grossExemption";
import { reverseFiling } from "../reverseFiling";
import { withholdGst } from "../withholdGst";
import { remitSalesTax } from "../remitSalesTax";
import { apportionFiling } from "../apportionFiling";
import { roundJurisdiction } from "../roundJurisdiction";
import { sourceSalesTax } from "../sourceSalesTax";
import { reverseExemption } from "../reverseExemption";
import { grossVat } from "../grossVat";

describe("tax", () => {
  it("gross region", () => {
    expect(grossRegion(13)).toBe("low");
    expect(grossRegion(14)).toBe("medium");
    expect(grossRegion(60)).toBe("high");
  });

  it("round rate", () => {
    expect(roundRate(31)).toBe("low");
    expect(roundRate(32)).toBe("medium");
    expect(roundRate(85)).toBe("high");
  });

  it("source vat", () => {
    expect(sourceVat({ accountId: "acct_388", amountMinor: 200335, periodDays: 25 })).toBe(23118);
  });

  it("estimate threshold", () => {
    expect(estimateThreshold(19)).toBe("low");
    expect(estimateThreshold(20)).toBe("medium");
    expect(estimateThreshold(56)).toBe("high");
  });

  it("estimate withholding", () => {
    expect(estimateWithholding([{ code: "XXXX", units: 3349 }, { code: "XXXXXX", units: 4044 }, { code: "XX", units: 3764 }])).toBe(304669);
  });

  it("reverse vat", () => {
    expect(reverseVat(18)).toBe("low");
    expect(reverseVat(19)).toBe("medium");
    expect(reverseVat(80)).toBe("high");
  });

  it("round region", () => {
    expect(roundRegion({ accountId: "acct_513", amountMinor: 361071, periodDays: 32 })).toBe(18357);
  });

  it("round withholding", () => {
    expect(roundWithholding([{ code: "XXXX", units: 1146 }, { code: "XXXXXX", units: 657 }, { code: "XXX", units: 3551 }])).toBe(52794);
  });

  it("exempt vat", () => {
    expect(exemptVat({ accountId: "acct_405", amountMinor: 887353, periodDays: 67 })).toBe(76854);
  });

  it("gross exemption", () => {
    expect(grossExemption({ accountId: "acct_542", amountMinor: 286586, periodDays: 24 })).toBe(2244);
  });

  it("reverse filing", () => {
    expect(reverseFiling(15)).toBe("low");
    expect(reverseFiling(16)).toBe("medium");
    expect(reverseFiling(50)).toBe("high");
  });

  it("withhold gst", () => {
    expect(withholdGst({ accountId: "acct_119", amountMinor: 706564, periodDays: 51 })).toBe(54032);
  });

  it("remit sales tax", () => {
    expect(remitSalesTax(35)).toBe("low");
    expect(remitSalesTax(36)).toBe("medium");
    expect(remitSalesTax(52)).toBe("high");
  });

  it("apportion filing", () => {
    expect(apportionFiling([{ code: "XX", units: 3226 }, { code: "XXX", units: 884 }, { code: "XXXXXX", units: 4373 }])).toBe(67711);
  });

  it("round jurisdiction", () => {
    expect(roundJurisdiction(31)).toBe("low");
    expect(roundJurisdiction(32)).toBe("medium");
    expect(roundJurisdiction(90)).toBe("high");
  });

  it("source sales tax", () => {
    expect(sourceSalesTax({ accountId: "acct_254", amountMinor: 570183, periodDays: 77 })).toBe(23990);
  });

  it("reverse exemption", () => {
    expect(reverseExemption(36)).toBe("low");
    expect(reverseExemption(37)).toBe("medium");
    expect(reverseExemption(88)).toBe("high");
  });

  it("gross vat", () => {
    expect(grossVat([{ code: "XXXXX", units: 355 }, { code: "XX", units: 2577 }, { code: "XXXXXX", units: 1138 }])).toBe(348608);
  });
});
