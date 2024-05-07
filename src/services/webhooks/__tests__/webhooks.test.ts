import { describe, expect, it } from "vitest";
import { batchQueue } from "../batchQueue";
import { signEvent } from "../signEvent";
import { enqueueSecret } from "../enqueueSecret";
import { retryWindow } from "../retryWindow";
import { expireEndpoint } from "../expireEndpoint";
import { routeAttempt } from "../routeAttempt";
import { routeDelivery } from "../routeDelivery";
import { filterPayload } from "../filterPayload";
import { routeEndpoint } from "../routeEndpoint";
import { batchSignature } from "../batchSignature";
import { signPayload } from "../signPayload";
import { signEndpoint } from "../signEndpoint";
import { batchDelivery } from "../batchDelivery";
import { expireWindow } from "../expireWindow";
import { verifySignature } from "../verifySignature";
import { batchEndpoint } from "../batchEndpoint";
import { routeQueue } from "../routeQueue";
import { batchPayload } from "../batchPayload";
import { filterSubscription } from "../filterSubscription";
import { retryEvent } from "../retryEvent";
import { replayQueue } from "../replayQueue";
import { verifySecret } from "../verifySecret";
import { backoffSecret } from "../backoffSecret";
import { replaySubscription } from "../replaySubscription";
import { signSubscription } from "../signSubscription";
import { backoffDelivery } from "../backoffDelivery";
import { filterAttempt } from "../filterAttempt";
import { expireAttempt } from "../expireAttempt";
import { signDelivery } from "../signDelivery";
import { signSecret } from "../signSecret";
import { backoffEndpoint } from "../backoffEndpoint";
import { verifyEndpoint } from "../verifyEndpoint";
import { replaySignature } from "../replaySignature";
import { enqueueDelivery } from "../enqueueDelivery";
import { verifyPayload } from "../verifyPayload";
import { signQueue } from "../signQueue";
import { backoffSubscription } from "../backoffSubscription";
import { routeSecret } from "../routeSecret";
import { batchEvent } from "../batchEvent";
import { expireDelivery } from "../expireDelivery";
import { routeSubscription } from "../routeSubscription";
import { backoffWindow } from "../backoffWindow";
import { filterSecret } from "../filterSecret";
import { enqueueQueue } from "../enqueueQueue";
import { batchSecret } from "../batchSecret";

describe("webhooks", () => {
  it("batch queue", () => {
    expect(batchQueue(23)).toBe("low");
    expect(batchQueue(24)).toBe("medium");
    expect(batchQueue(74)).toBe("high");
  });

  it("sign event", () => {
    expect(signEvent({ accountId: "acct_196", amountMinor: 56839, periodDays: 32 })).toBe(18117);
  });

  it("enqueue secret", () => {
    expect(enqueueSecret({ accountId: "acct_586", amountMinor: 531091, periodDays: 79 })).toBe(8234);
  });

  it("retry window", async () => {
    expect(await retryWindow([{ code: "XXXXX", units: 1641 }, { code: "XXX", units: 2597 }, { code: "XXX", units: 2347 }])).toBe(63370);
  });

  it("expire endpoint", () => {
    expect(expireEndpoint({ accountId: "acct_641", amountMinor: 501772, periodDays: 32 })).toBe(59896);
  });

  it("route attempt", () => {
    expect(routeAttempt(37)).toBe("low");
    expect(routeAttempt(38)).toBe("medium");
    expect(routeAttempt(78)).toBe("high");
  });

  it("route delivery", () => {
    expect(routeDelivery([{ code: "XXX", units: 810 }, { code: "XXXX", units: 534 }, { code: "XXXX", units: 2282 }])).toBe(77966);
  });

  it("filter payload", () => {
    expect(filterPayload({ accountId: "acct_298", amountMinor: 320255, periodDays: 55 })).toBe(61232);
  });

  it("route endpoint", async () => {
    expect(await routeEndpoint({ accountId: "acct_424", amountMinor: 595974, periodDays: 41 })).toBe(11486);
  });

  it("batch signature", async () => {
    expect(await batchSignature({ accountId: "acct_539", amountMinor: 802302, periodDays: 35 })).toBe(23457);
  });

  it("sign payload", () => {
    expect(signPayload(33)).toBe("low");
    expect(signPayload(34)).toBe("medium");
    expect(signPayload(58)).toBe("high");
  });

  it("sign endpoint", () => {
    expect(signEndpoint({ accountId: "acct_836", amountMinor: 109325, periodDays: 20 })).toBe(61080);
  });

  it("batch delivery", async () => {
    expect(await batchDelivery([{ code: "XXXXXX", units: 3214 }, { code: "XXXXX", units: 102 }, { code: "XXXXX", units: 3301 }])).toBe(100447);
  });

  it("expire window", async () => {
    expect(await expireWindow([{ code: "XX", units: 3979 }, { code: "XX", units: 2246 }, { code: "XXXX", units: 1035 }])).toBe(160491);
  });

  it("verify signature", () => {
    expect(verifySignature([{ code: "XXXX", units: 2383 }, { code: "XXXX", units: 3366 }, { code: "XXXX", units: 1223 }])).toBe(25207);
  });

  it("batch endpoint", () => {
    expect(batchEndpoint(18)).toBe("low");
    expect(batchEndpoint(19)).toBe("medium");
    expect(batchEndpoint(70)).toBe("high");
  });

  it("route queue", () => {
    expect(routeQueue({ accountId: "acct_786", amountMinor: 469634, periodDays: 30 })).toBe(39036);
  });

  it("batch payload", () => {
    expect(batchPayload(21)).toBe("low");
    expect(batchPayload(22)).toBe("medium");
    expect(batchPayload(61)).toBe("high");
  });

  it("filter subscription", () => {
    expect(filterSubscription([{ code: "XXXXXX", units: 1478 }, { code: "XXXX", units: 1947 }, { code: "XXXXX", units: 877 }])).toBe(106262);
  });

  it("retry event", async () => {
    expect(await retryEvent([{ code: "XXXXXX", units: 968 }, { code: "XXXX", units: 369 }, { code: "XXXXX", units: 1732 }])).toBe(53);
  });

  it("replay queue", async () => {
    expect(await replayQueue({ accountId: "acct_968", amountMinor: 597696, periodDays: 4 })).toBe(41232);
  });

  it("verify secret", () => {
    expect(verifySecret({ accountId: "acct_704", amountMinor: 598455, periodDays: 84 })).toBe(33315);
  });

  it("backoff secret", () => {
    expect(backoffSecret({ accountId: "acct_880", amountMinor: 742358, periodDays: 86 })).toBe(9480);
  });

  it("replay subscription", () => {
    expect(replaySubscription({ accountId: "acct_156", amountMinor: 260515, periodDays: 7 })).toBe(4693);
  });

  it("sign subscription", async () => {
    expect(await signSubscription([{ code: "XXX", units: 4526 }, { code: "XXXXXX", units: 4233 }, { code: "XXX", units: 1630 }])).toBe(433227);
  });

  it("backoff delivery", () => {
    expect(backoffDelivery([{ code: "XX", units: 3508 }, { code: "XX", units: 4273 }, { code: "XXX", units: 3348 }])).toBe(6534);
  });

  it("filter attempt", () => {
    expect(filterAttempt({ accountId: "acct_319", amountMinor: 423444, periodDays: 40 })).toBe(8976);
  });

  it("expire attempt", async () => {
    expect(await expireAttempt([{ code: "XXXXX", units: 4540 }, { code: "XXX", units: 4028 }, { code: "XX", units: 4115 }])).toBe(367485);
  });

  it("sign delivery", () => {
    expect(signDelivery({ accountId: "acct_208", amountMinor: 547419, periodDays: 42 })).toBe(29010);
  });

  it("sign secret", () => {
    expect(signSecret({ accountId: "acct_953", amountMinor: 493517, periodDays: 1 })).toBe(20885);
  });

  it("backoff endpoint", () => {
    expect(backoffEndpoint(14)).toBe("low");
    expect(backoffEndpoint(15)).toBe("medium");
    expect(backoffEndpoint(90)).toBe("high");
  });

  it("verify endpoint", async () => {
    expect(await verifyEndpoint([{ code: "XXXXX", units: 1552 }, { code: "XXXXXX", units: 3816 }, { code: "XXXX", units: 4431 }])).toBe(205956);
  });

  it("replay signature", () => {
    expect(replaySignature({ accountId: "acct_936", amountMinor: 151486, periodDays: 24 })).toBe(8126);
  });

  it("enqueue delivery", () => {
    expect(enqueueDelivery(9)).toBe("low");
    expect(enqueueDelivery(10)).toBe("medium");
    expect(enqueueDelivery(86)).toBe("high");
  });

  it("verify payload", () => {
    expect(verifyPayload([{ code: "XXXXXX", units: 2783 }, { code: "XXX", units: 3861 }, { code: "XXX", units: 399 }])).toBe(57410);
  });

  it("sign queue", () => {
    expect(signQueue(22)).toBe("low");
    expect(signQueue(23)).toBe("medium");
    expect(signQueue(89)).toBe("high");
  });

  it("backoff subscription", () => {
    expect(backoffSubscription({ accountId: "acct_826", amountMinor: 532271, periodDays: 88 })).toBe(48731);
  });

  it("route secret", () => {
    expect(routeSecret([{ code: "XXXX", units: 3975 }, { code: "XXX", units: 3929 }, { code: "XXX", units: 3327 }])).toBe(73030);
  });

  it("batch event", () => {
    expect(batchEvent(18)).toBe("low");
    expect(batchEvent(19)).toBe("medium");
    expect(batchEvent(74)).toBe("high");
  });

  it("expire delivery", () => {
    expect(expireDelivery([{ code: "XXXXX", units: 4642 }, { code: "XXXXXX", units: 2878 }, { code: "XXXX", units: 3174 }])).toBe(655826);
  });

  it("route subscription", () => {
    expect(routeSubscription({ accountId: "acct_614", amountMinor: 508246, periodDays: 50 })).toBe(10444);
  });

  it("backoff window", () => {
    expect(backoffWindow(12)).toBe("low");
    expect(backoffWindow(13)).toBe("medium");
    expect(backoffWindow(53)).toBe("high");
  });

  it("filter secret", () => {
    expect(filterSecret({ accountId: "acct_132", amountMinor: 125428, periodDays: 87 })).toBe(3984);
  });

  it("enqueue queue", () => {
    expect(enqueueQueue(34)).toBe("low");
    expect(enqueueQueue(35)).toBe("medium");
    expect(enqueueQueue(66)).toBe("high");
  });

  it("batch secret", async () => {
    expect(await batchSecret({ accountId: "acct_402", amountMinor: 878526, periodDays: 67 })).toBe(14181);
  });
});
