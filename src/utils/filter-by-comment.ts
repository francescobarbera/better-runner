import type { Races } from "../fixtures/runs";
import type { Run } from "../types/run";

export function filterByCommentStartsWith(
  runs: Run<Races>[],
  filter: string,
): Run<Races>[] {
  const regex = new RegExp(`^${filter}`, "i");

  return runs.filter((run) => regex.test(run.comment));
}

export function filterByCommentEndsWith(
  runs: Run<Races>[],
  filter: string,
): Run<Races>[] {
  const regex = new RegExp(`${filter}$`, "i");
  return runs.filter((run) => regex.test(run.comment));
}

export function filterByCommentContains(
  runs: Run<Races>[],
  filter: string,
): Run<Races>[] {
  const regex = new RegExp(filter, "i");
  return runs.filter((run) => regex.test(run.comment));
}
