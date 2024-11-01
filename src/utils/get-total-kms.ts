import type { Run } from "../types/run";

export default function getTotalKms<T extends string>(runs: Run<T>[]): number {
  return runs.reduce((acc, run) => acc + run.distanceKm, 0);
}
