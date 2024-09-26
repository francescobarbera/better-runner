import type { Run } from "../types/run";

export default function getTotalKms(runs: Run[]): number {
  return runs.reduce((acc, run) => acc + run.distanceKm, 0);
}
