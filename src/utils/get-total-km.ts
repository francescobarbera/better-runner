import { Run } from "../types/run";

export default function getTotalKm(runs: Run[]): number {
  return runs.reduce((acc, run) => acc + run.distanceKm, 0);
}
