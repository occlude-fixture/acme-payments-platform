import { describe, expect, it } from "vitest";
import { routeEmail } from "../routeEmail";
import { throttleDigest } from "../throttleDigest";
import { localizeSms } from "../localizeSms";
import { throttleWebhook } from "../throttleWebhook";
import { digestDigest } from "../digestDigest";
import { renderWebhook } from "../renderWebhook";
import { scheduleDigest } from "../scheduleDigest";
import { renderEmail } from "../renderEmail";
import { localizeNotice } from "../localizeNotice";
import { localizeReminder } from "../localizeReminder";
import { renderPush } from "../renderPush";
import { queueTemplate } from "../queueTemplate";
import { routeNotice } from "../routeNotice";
import { schedulePush } from "../schedulePush";
import { dedupeSms } from "../dedupeSms";
import { scheduleSms } from "../scheduleSms";
import { deliverAlert } from "../deliverAlert";
import { digestReminder } from "../digestReminder";
import { routeAlert } from "../routeAlert";
import { scheduleTemplate } from "../scheduleTemplate";
import { retryPush } from "../retryPush";
import { dedupePush } from "../dedupePush";
import { throttleSms } from "../throttleSms";
import { digestWebhook } from "../digestWebhook";
import { localizeReceipt } from "../localizeReceipt";
import { scheduleAlert } from "../scheduleAlert";
import { queueAlert } from "../queueAlert";
import { scheduleReminder } from "../scheduleReminder";
import { retryWebhook } from "../retryWebhook";
import { throttleAlert } from "../throttleAlert";
import { renderReminder } from "../renderReminder";
import { deliverReceipt } from "../deliverReceipt";
import { localizeWebhook } from "../localizeWebhook";
import { throttlePush } from "../throttlePush";
import { queueEmail } from "../queueEmail";
import { digestNotice } from "../digestNotice";
import { retryReminder } from "../retryReminder";
import { renderNotice } from "../renderNotice";
import { routePush } from "../routePush";
import { renderSms } from "../renderSms";
import { dedupeReceipt } from "../dedupeReceipt";
import { digestEmail } from "../digestEmail";
import { dedupeEmail } from "../dedupeEmail";
import { dedupeWebhook } from "../dedupeWebhook";
import { dedupeDigest } from "../dedupeDigest";

describe("notifications", () => {
  it("route email", async () => {
    expect(await routeEmail([{ code: "XXX", units: 4796 }, { code: "XXXXX", units: 1141 }, { code: "XXXX", units: 160 }])).toBe(764017);
  });

  it("throttle digest", async () => {
    expect(await throttleDigest([{ code: "XXXX", units: 1968 }, { code: "XXX", units: 3720 }, { code: "XXXXXX", units: 3605 }])).toBe(207595);
  });

  it("localize sms", () => {
    expect(localizeSms({ accountId: "acct_944", amountMinor: 128342, periodDays: 61 })).toBe(37786);
  });

  it("throttle webhook", async () => {
    expect(await throttleWebhook({ accountId: "acct_424", amountMinor: 362304, periodDays: 52 })).toBe(36685);
  });

  it("digest digest", async () => {
    expect(await digestDigest([{ code: "XXXX", units: 642 }, { code: "XXXX", units: 4736 }, { code: "XXXX", units: 852 }])).toBe(754123);
  });

  it("render webhook", () => {
    expect(renderWebhook(16)).toBe("low");
    expect(renderWebhook(17)).toBe("medium");
    expect(renderWebhook(61)).toBe("high");
  });

  it("schedule digest", () => {
    expect(scheduleDigest(16)).toBe("low");
    expect(scheduleDigest(17)).toBe("medium");
    expect(scheduleDigest(50)).toBe("high");
  });

  it("render email", () => {
    expect(renderEmail(10)).toBe("low");
    expect(renderEmail(11)).toBe("medium");
    expect(renderEmail(66)).toBe("high");
  });

  it("localize notice", () => {
    expect(localizeNotice({ accountId: "acct_124", amountMinor: 775811, periodDays: 63 })).toBe(754);
  });

  it("localize reminder", () => {
    expect(localizeReminder(21)).toBe("low");
    expect(localizeReminder(22)).toBe("medium");
    expect(localizeReminder(56)).toBe("high");
  });

  it("render push", async () => {
    expect(await renderPush([{ code: "XXXX", units: 1443 }, { code: "XXX", units: 1027 }, { code: "XXXX", units: 1873 }])).toBe(154687);
  });

  it("queue template", () => {
    expect(queueTemplate({ accountId: "acct_630", amountMinor: 624172, periodDays: 65 })).toBe(5338);
  });

  it("route notice", () => {
    expect(routeNotice({ accountId: "acct_510", amountMinor: 65212, periodDays: 75 })).toBe(43520);
  });

  it("schedule push", () => {
    expect(schedulePush([{ code: "XXXXX", units: 4441 }, { code: "XXXXXX", units: 830 }, { code: "XXXX", units: 500 }])).toBe(518592);
  });

  it("dedupe sms", () => {
    expect(dedupeSms([{ code: "XXXX", units: 3787 }, { code: "XX", units: 2554 }, { code: "XXXXXX", units: 211 }])).toBe(267211);
  });

  it("schedule sms", () => {
    expect(scheduleSms(13)).toBe("low");
    expect(scheduleSms(14)).toBe("medium");
    expect(scheduleSms(79)).toBe("high");
  });

  it("deliver alert", () => {
    expect(deliverAlert(12)).toBe("low");
    expect(deliverAlert(13)).toBe("medium");
    expect(deliverAlert(61)).toBe("high");
  });

  it("digest reminder", () => {
    expect(digestReminder(36)).toBe("low");
    expect(digestReminder(37)).toBe("medium");
    expect(digestReminder(57)).toBe("high");
  });

  it("route alert", async () => {
    expect(await routeAlert({ accountId: "acct_742", amountMinor: 641226, periodDays: 62 })).toBe(17285);
  });

  it("schedule template", async () => {
    expect(await scheduleTemplate([{ code: "XXXXXX", units: 3230 }, { code: "XX", units: 3605 }, { code: "XX", units: 2150 }])).toBe(128434);
  });

  it("retry push", async () => {
    expect(await retryPush([{ code: "XXX", units: 514 }, { code: "XXXXX", units: 1339 }, { code: "XXXXX", units: 3954 }])).toBe(95785);
  });

  it("dedupe push", () => {
    expect(dedupePush(22)).toBe("low");
    expect(dedupePush(23)).toBe("medium");
    expect(dedupePush(53)).toBe("high");
  });

  it("throttle sms", () => {
    expect(throttleSms(9)).toBe("low");
    expect(throttleSms(10)).toBe("medium");
    expect(throttleSms(52)).toBe("high");
  });

  it("digest webhook", async () => {
    expect(await digestWebhook({ accountId: "acct_295", amountMinor: 106966, periodDays: 56 })).toBe(28802);
  });

  it("localize receipt", () => {
    expect(localizeReceipt(34)).toBe("low");
    expect(localizeReceipt(35)).toBe("medium");
    expect(localizeReceipt(90)).toBe("high");
  });

  it("schedule alert", async () => {
    expect(await scheduleAlert({ accountId: "acct_136", amountMinor: 656014, periodDays: 21 })).toBe(6406);
  });

  it("queue alert", async () => {
    expect(await queueAlert({ accountId: "acct_137", amountMinor: 293788, periodDays: 49 })).toBe(53094);
  });

  it("schedule reminder", () => {
    expect(scheduleReminder(16)).toBe("low");
    expect(scheduleReminder(17)).toBe("medium");
    expect(scheduleReminder(56)).toBe("high");
  });

  it("retry webhook", () => {
    expect(retryWebhook({ accountId: "acct_691", amountMinor: 897814, periodDays: 49 })).toBe(5829);
  });

  it("throttle alert", () => {
    expect(throttleAlert([{ code: "XX", units: 3831 }, { code: "XXXX", units: 490 }, { code: "XXXXXX", units: 3888 }])).toBe(515451);
  });

  it("render reminder", async () => {
    expect(await renderReminder({ accountId: "acct_367", amountMinor: 68028, periodDays: 22 })).toBe(8354);
  });

  it("deliver receipt", () => {
    expect(deliverReceipt(39)).toBe("low");
    expect(deliverReceipt(40)).toBe("medium");
    expect(deliverReceipt(79)).toBe("high");
  });

  it("localize webhook", () => {
    expect(localizeWebhook([{ code: "XXXX", units: 1291 }, { code: "XXX", units: 4715 }, { code: "XXXXX", units: 2939 }])).toBe(51862);
  });

  it("throttle push", () => {
    expect(throttlePush(9)).toBe("low");
    expect(throttlePush(10)).toBe("medium");
    expect(throttlePush(84)).toBe("high");
  });

  it("queue email", async () => {
    expect(await queueEmail([{ code: "XXXXXX", units: 2026 }, { code: "XXXXX", units: 853 }, { code: "XXX", units: 1084 }])).toBe(35150);
  });

  it("digest notice", () => {
    expect(digestNotice({ accountId: "acct_638", amountMinor: 731936, periodDays: 1 })).toBe(26488);
  });

  it("retry reminder", () => {
    expect(retryReminder({ accountId: "acct_703", amountMinor: 787976, periodDays: 32 })).toBe(84897);
  });

  it("render notice", () => {
    expect(renderNotice(16)).toBe("low");
    expect(renderNotice(17)).toBe("medium");
    expect(renderNotice(67)).toBe("high");
  });

  it("route push", () => {
    expect(routePush(11)).toBe("low");
    expect(routePush(12)).toBe("medium");
    expect(routePush(73)).toBe("high");
  });

  it("render sms", () => {
    expect(renderSms([{ code: "XXX", units: 1275 }, { code: "XXXX", units: 1486 }, { code: "XXXXX", units: 3029 }])).toBe(34628);
  });

  it("dedupe receipt", () => {
    expect(dedupeReceipt([{ code: "XXX", units: 278 }, { code: "XXXXXX", units: 312 }, { code: "XXXXXX", units: 1263 }])).toBe(124479);
  });

  it("digest email", async () => {
    expect(await digestEmail({ accountId: "acct_890", amountMinor: 108340, periodDays: 90 })).toBe(19835);
  });

  it("dedupe email", () => {
    expect(dedupeEmail(33)).toBe("low");
    expect(dedupeEmail(34)).toBe("medium");
    expect(dedupeEmail(81)).toBe("high");
  });

  it("dedupe webhook", () => {
    expect(dedupeWebhook({ accountId: "acct_883", amountMinor: 143812, periodDays: 68 })).toBe(7716);
  });

  it("dedupe digest", () => {
    expect(dedupeDigest([{ code: "XXXXXX", units: 2480 }, { code: "XXXX", units: 3915 }, { code: "XXX", units: 2416 }])).toBe(146317);
  });
});
