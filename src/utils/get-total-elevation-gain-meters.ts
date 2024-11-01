import { Races } from "../fixtures/runs";
import type { Run } from "../types/run";

export default function getTotalElevationGainMeters<T extends string>(
  runs: Run<T>[],
): number {
  return runs.reduce((acc, run) => acc + run.elevationGainMeters, 0);
}
