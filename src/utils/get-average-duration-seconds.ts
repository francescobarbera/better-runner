import { Races } from "../fixtures/runs";
import type { Run } from "../types/run";

export default function getAverageDurationSeconds<T extends string>(
  runs: Run<T>[],
): number {
  if (runs.length === 0) {
    return 0;
  }

  const totalDurationSeconds = runs.reduce(
    (acc, run) => acc + run.durationSeconds,
    0,
  );

  return totalDurationSeconds / runs.length;
}
