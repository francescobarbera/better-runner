import { describe, test } from "node:test";
import assert from "node:assert";
import getTotalKms from "./get-total-kms";
import { makeARun } from "../fixtures/runs";

describe("getTotalKms", () => {
  test("it returns 0 for an empty array", () => {
    const result = getTotalKms([]);

    assert.strictEqual(result, 0);
  });

  test("it returns the correct total kilometers for a single run", () => {
    const runs = [makeARun()];

    const result = getTotalKms(runs);

    assert.strictEqual(result, runs[0].distanceKm);
  });

  test("it returns the correct total kilometers for an array of runs", () => {
    const runs = Array.from({ length: 3 }, makeARun);

    const result = getTotalKms(runs);

    assert.strictEqual(
      result,
      runs[0].distanceKm + runs[1].distanceKm + runs[2].distanceKm,
    );
  });

  test("it returns 0 when the distance for an array of runs are always 0", () => {
    const runs = Array.from({ length: 3 }, () => ({
      ...makeARun(),
      distanceKm: 0,
    }));

    const result = getTotalKms(runs);

    assert.strictEqual(result, 0);
  });
});
