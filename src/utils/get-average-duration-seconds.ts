import type { Run } from "../types/run";

export default function getAverageDurationSeconds(runs: Run[]): number {
  if (runs.length === 0) {
    return 0;
  }

  const totalDurationSeconds = runs.reduce(
    (acc, run) => acc + run.durationSeconds,
    0,
  );

  return totalDurationSeconds / runs.length;
}
