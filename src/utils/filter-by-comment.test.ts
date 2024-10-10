import { describe, test } from "node:test";
import {
  filterByCommentStartsWith,
  filterByCommentEndsWith,
  filterByCommentContains,
} from "./filter-by-comment";
import { Run } from "../types/run";
import { makeARun } from "../fixtures/runs";
import assert from "node:assert";

describe("filterByCommentStartsWith", () => {
  test("it filters comments that start with the given substring regardless of uppercase or lowercase", () => {
    const runs = [
      { ...makeARun(), comment: "not this one" },
      { ...makeARun(), comment: "THIS one" },
      { ...makeARun(), comment: "not this one" },
    ];

    const result = filterByCommentStartsWith(runs, "this");

    assert.equal(result.length, 1);
    assert.deepStrictEqual(result[0], runs[1]);
  });

  //   test("should be case-insensitive", () => {
  //     const result = filterByCommentStartsWith(runs, "morning");
  //     expect(result).toEqual([{ durationSeconds: 120, comment: "Morning run" }]);
  //   });

  //   test("should return an empty array if no comments start with the given substring", () => {
  //     const result = filterByCommentStartsWith(runs, "Noon");
  //     expect(result).toEqual([]);
  //   });
  // });

  // describe("filterByCommentEndsWith", () => {
  //   test("should filter comments that end with the given substring", () => {
  //     const result = filterByCommentEndsWith(runs, "run");
  //     expect(result).toEqual([
  //       { durationSeconds: 120, comment: "Morning run" },
  //       { durationSeconds: 150, comment: "Evening run" },
  //       { durationSeconds: 200, comment: "Night run" }
  //     ]);
  //   });

  //   test("should be case-insensitive", () => {
  //     const result = filterByCommentEndsWith(runs, "RUN");
  //     expect(result).toEqual([
  //       { durationSeconds: 120, comment: "Morning run" },
  //       { durationSeconds: 150, comment: "Evening run" },
  //       { durationSeconds: 200, comment: "Night run" }
  //     ]);
  //   });

  //   test("should return an empty array if no comments end with the given substring", () => {
  //     const result = filterByCommentEndsWith(runs, "jog");
  //     expect(result).toEqual([]);
  //   });
  // });

  // describe("filterByCommentContains", () => {
  //   test("should filter comments that contain the given substring", () => {
  //     const result = filterByCommentContains(runs, "run");
  //     expect(result).toEqual([
  //       { durationSeconds: 120, comment: "Morning run" },
  //       { durationSeconds: 150, comment: "Evening run" },
  //       { durationSeconds: 200, comment: "Night run" }
  //     ]);
  //   });

  //   test("should be case-insensitive", () => {
  //     const result = filterByCommentContains(runs, "RUN");
  //     expect(result).toEqual([
  //       { durationSeconds: 120, comment: "Morning run" },
  //       { durationSeconds: 150, comment: "Evening run" },
  //       { durationSeconds: 200, comment: "Night run" }
  //     ]);
  //   });

  //   test("should return an empty array if no comments contain the given substring", () => {
  //     const result = filterByCommentContains(runs, "swim");
  //     expect(result).toEqual([]);
  //   });
});
