import type { Activity } from "./activity";
import type { SplitType } from "./split-type";

export type RunType = "FARTLEK" | "SLOW_RUN" | "RACE" | "BY_FEEL";

export type Split = {
  type: SplitType;
  minuteKm: number;
  elevationGainMeters: number;
  averageHeartRate: number;
};

export type Run = (
  | {
      type: "SLOW_RUN" | "RACE" | "BY_FEEL";
    }
  | {
      type: "FARTLEK";
      customSplits: Split[];
    }
) & {
  averagePaceMinutesPerKm: number;
  elevationGainMeters: number;
  averageCadence: number;
} & Activity;
