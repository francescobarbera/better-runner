import type { Run } from "../types/run";

export function filterByCommentStartsWith(runs: Run[], filter: string): Run[] {
  const regex = new RegExp(`^${filter}`, "i");

  return runs.filter((run) => regex.test(run.comment));
}

export function filterByCommentEndsWith(runs: Run[], filter: string): Run[] {
  const regex = new RegExp(`${filter}$`, "i");
  return runs.filter((run) => regex.test(run.comment));
}

export function filterByCommentContains(runs: Run[], filter: string): Run[] {
  const regex = new RegExp(filter, "i");
  return runs.filter((run) => regex.test(run.comment));
}
