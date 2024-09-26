import { Run } from "../types/run";

export default function getTotalDurationSeconds(runs: Run[]): number {
  return runs.reduce((acc, run) => acc + run.durationSeconds, 0);
}
