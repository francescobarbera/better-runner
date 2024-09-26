import { describe, test } from "node:test";
import assert from "node:assert";
import getTotalDurationSeconds from "./get-total-duration-seconds";
import { makeARun } from "../fixtures/runs";

describe("getTotalDurationSeconds", () => {
  test("it returns 0 for an empty array", () => {
    const result = getTotalDurationSeconds([]);
    assert.strictEqual(result, 0);
  });

  test("it returns the correct total duration for a single run", () => {
    const runs = [ makeARun() ];

    const result = getTotalDurationSeconds(runs);

    assert.strictEqual(
      result,
      runs[0].durationSeconds
    );
  });


  test("it returns the correct total duration for an array of runs", () => {
    const runs = Array.from({ length: 3 }, makeARun);

    const result = getTotalDurationSeconds(runs);

    assert.strictEqual(
      result,
      runs[0].durationSeconds +
        runs[1].durationSeconds +
        runs[2].durationSeconds,
    );
  });


  test("it returns 0 when the duration for an array of runs are always 0", () => {
    const runs = Array.from({ length: 3 }, () => ({
      ...makeARun(),
      durationSeconds: 0,
    }));

    const result = getTotalDurationSeconds(runs);

    assert.strictEqual(result, 0);
  });
});
