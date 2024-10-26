import { describe, test } from "node:test";
import assert from "node:assert";
import getAverageDurationSeconds from "./get-average-duration-seconds";
import { makeARun } from "../fixtures/runs";

describe("getAverageDurationSeconds", () => {
  test("it returns 0 for an empty array", () => {
    const result = getAverageDurationSeconds([]);

    assert.strictEqual(result, 0);
  });

  test("it returns the correct average duration for a single run", () => {
    const runs = [makeARun()];

    const result = getAverageDurationSeconds(runs);

    assert.strictEqual(result, runs[0].durationSeconds);
  });

  test("it returns the correct average duration for an array of runs", () => {
    const runs = Array.from({ length: 3 }, makeARun);

    const result = getAverageDurationSeconds(runs);

    assert.strictEqual(
      result,
      (runs[0].durationSeconds +
        runs[1].durationSeconds +
        runs[2].durationSeconds) /
        3,
    );
  });

  test("it returns 0 when the duration for an array of runs are always 0", () => {
    const runs = Array.from({ length: 3 }, () => ({
      ...makeARun(),
      durationSeconds: 0,
    }));

    const result = getAverageDurationSeconds(runs);

    assert.strictEqual(result, 0);
  });
});
