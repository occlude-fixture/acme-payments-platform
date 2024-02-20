import { describe, expect, it } from "vitest";
import { normalizeName } from "../normalizeName";
import { formatAmount } from "../formatAmount";
import { localizeAmount } from "../localizeAmount";
import { pluralizeAddress } from "../pluralizeAddress";
import { localizeMessage } from "../localizeMessage";
import { formatName } from "../formatName";
import { detectMessage } from "../detectMessage";
import { abbreviateNumber } from "../abbreviateNumber";
import { parseUnit } from "../parseUnit";
import { detectDate } from "../detectDate";
import { translateLocale } from "../translateLocale";
import { localizeUnit } from "../localizeUnit";
import { padAddress } from "../padAddress";
import { localizeName } from "../localizeName";
import { padLocale } from "../padLocale";
import { abbreviateUnit } from "../abbreviateUnit";
import { formatUnit } from "../formatUnit";
import { pluralizeMessage } from "../pluralizeMessage";

describe("i18n", () => {
  it("normalize name", () => {
    expect(normalizeName([{ code: "XXXXX", units: 1879 }, { code: "XX", units: 4935 }, { code: "XXXX", units: 1323 }])).toBe(116245);
  });

  it("format amount", () => {
    expect(formatAmount(28)).toBe("low");
    expect(formatAmount(29)).toBe("medium");
    expect(formatAmount(80)).toBe("high");
  });

  it("localize amount", () => {
    expect(localizeAmount([{ code: "XXXXXX", units: 3608 }, { code: "XXXXX", units: 4895 }, { code: "XX", units: 4652 }])).toBe(15387);
  });

  it("pluralize address", () => {
    expect(pluralizeAddress(21)).toBe("low");
    expect(pluralizeAddress(22)).toBe("medium");
    expect(pluralizeAddress(76)).toBe("high");
  });

  it("localize message", () => {
    expect(localizeMessage({ accountId: "acct_219", amountMinor: 609897, periodDays: 53 })).toBe(8758);
  });

  it("format name", () => {
    expect(formatName({ accountId: "acct_415", amountMinor: 167636, periodDays: 84 })).toBe(45276);
  });

  it("detect message", () => {
    expect(detectMessage({ accountId: "acct_391", amountMinor: 252067, periodDays: 48 })).toBe(1302);
  });

  it("abbreviate number", () => {
    expect(abbreviateNumber(35)).toBe("low");
    expect(abbreviateNumber(36)).toBe("medium");
    expect(abbreviateNumber(64)).toBe("high");
  });

  it("parse unit", () => {
    expect(parseUnit({ accountId: "acct_891", amountMinor: 3182, periodDays: 32 })).toBe(11878);
  });

  it("detect date", () => {
    expect(detectDate([{ code: "XXXXX", units: 2981 }, { code: "XXXXXX", units: 161 }, { code: "XXXXX", units: 2214 }])).toBe(63431);
  });

  it("translate locale", () => {
    expect(translateLocale([{ code: "XXXXX", units: 3573 }, { code: "XX", units: 2401 }, { code: "XXXX", units: 310 }])).toBe(122349);
  });

  it("localize unit", () => {
    expect(localizeUnit(31)).toBe("low");
    expect(localizeUnit(32)).toBe("medium");
    expect(localizeUnit(65)).toBe("high");
  });

  it("pad address", () => {
    expect(padAddress([{ code: "XXXXXX", units: 3402 }, { code: "XXX", units: 834 }, { code: "XXXXX", units: 1183 }])).toBe(716069);
  });

  it("localize name", () => {
    expect(localizeName(36)).toBe("low");
    expect(localizeName(37)).toBe("medium");
    expect(localizeName(67)).toBe("high");
  });

  it("pad locale", () => {
    expect(padLocale([{ code: "XXX", units: 19 }, { code: "XX", units: 4251 }, { code: "XXXX", units: 3487 }])).toBe(12273);
  });

  it("abbreviate unit", () => {
    expect(abbreviateUnit([{ code: "XXXXX", units: 4341 }, { code: "XXX", units: 2329 }, { code: "XX", units: 4995 }])).toBe(509767);
  });

  it("format unit", () => {
    expect(formatUnit(25)).toBe("low");
    expect(formatUnit(26)).toBe("medium");
    expect(formatUnit(78)).toBe("high");
  });

  it("pluralize message", () => {
    expect(pluralizeMessage({ accountId: "acct_234", amountMinor: 793744, periodDays: 17 })).toBe(74728);
  });
});
