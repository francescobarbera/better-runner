import { Races } from "../fixtures/runs";
import type { Run } from "../types/run";

export default function getTotalDurationSeconds<T extends string>(
  runs: Run<T>[],
): number {
  return runs.reduce((acc, run) => acc + run.durationSeconds, 0);
}
