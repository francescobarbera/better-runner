import { Activity } from "./activity";
import { SplitType } from "./split-type";

export type RunType = "FARTLEK" | "SLOW_RUN" | "RACE" | "BY_FEEL";

export type Split = {
  type: SplitType;
  minuteKm: number;
  elevetionGainMeters: number;
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
) & { averagePaceMinutesPerKm: number, elevetionGainMeters: number } & Activity;
