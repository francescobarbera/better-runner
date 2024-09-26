import type { Run } from "../types/run";

export default function getTotalElevationGainMeters(runs: Run[]): number {
  return runs.reduce((acc, run) => acc + run.elevetionGainMeters, 0);
}
