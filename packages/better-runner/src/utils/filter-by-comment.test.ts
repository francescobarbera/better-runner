import { describe, test } from "node:test";
import assert from "node:assert";
import {
  filterByCommentStartsWith,
  filterByCommentEndsWith,
  filterByCommentContains,
} from "./filter-by-comment";
import { makeARun } from "../fixtures/runs";

describe("filterByCommentStartsWith", () => {
  test("it returns an empty array when no comments start with the filter", () => {
    const runs = Array.from({ length: 3 }, makeARun);
    const result = filterByCommentStartsWith(runs, "Nonexistent");

    assert.strictEqual(result.length, 0);
  });

  test("it returns the correct runs when comments start with the filter", () => {
    const runs = Array.from({ length: 3 }, makeARun);
    runs[0].comment = "Start with this";
    const result = filterByCommentStartsWith(runs, "Start");

    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].comment, "Start with this");
  });
});

describe("filterByCommentEndsWith", () => {
  test("it returns an empty array when no comments end with the filter", () => {
    const runs = Array.from({ length: 3 }, makeARun);
    const result = filterByCommentEndsWith(runs, "Nonexistent");

    assert.strictEqual(result.length, 0);
  });

  test("it returns the correct runs when comments end with the filter", () => {
    const runs = Array.from({ length: 3 }, makeARun);
    runs[0].comment = "End with this";
    const result = filterByCommentEndsWith(runs, "this");

    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].comment, "End with this");
  });
});

describe("filterByCommentContains", () => {
  test("it returns an empty array when no comments contain the filter", () => {
    const runs = Array.from({ length: 3 }, makeARun);
    const result = filterByCommentContains(runs, "Nonexistent");

    assert.strictEqual(result.length, 0);
  });

  test("it returns the correct runs when comments contain the filter", () => {
    const runs = Array.from({ length: 3 }, makeARun);
    runs[0].comment = "Contains this";
    const result = filterByCommentContains(runs, "Contains");

    assert.strictEqual(result.length, 1);
    assert.strictEqual(result[0].comment, "Contains this");
  });
});
