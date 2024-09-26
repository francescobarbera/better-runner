import { describe, test } from "node:test";
import assert from "node:assert";
import getTotalElevationGainMeters from "./get-total-elevation-gain-meters";
import { makeARun } from "../fixtures/runs";

describe("getTotalElevationGainMeters", () => {
  test("it returns 0 for an empty array", () => {
    const result = getTotalElevationGainMeters([]);
    assert.strictEqual(result, 0);
  });

  test("it returns the correct total elevation gain for an single of run", () => {
    const runs = [makeARun()];

    const result = getTotalElevationGainMeters(runs);

    assert.strictEqual(result, runs[0].elevetionGainMeters);
  });

  test("it returns the correct total elevation gain for an array of runs", () => {
    const runs = Array.from({ length: 3 }, makeARun);

    const result = getTotalElevationGainMeters(runs);

    assert.strictEqual(
      result,
      runs[0].elevetionGainMeters +
        runs[1].elevetionGainMeters +
        runs[2].elevetionGainMeters,
    );
  });

  test("it returns 0 when the elevation gain for an array of runs are always 0", () => {
    const runs = Array.from({ length: 3 }, () => ({
      ...makeARun(),
      elevetionGainMeters: 0,
    }));

    const result = getTotalElevationGainMeters(runs);

    assert.strictEqual(result, 0);
  });
});
