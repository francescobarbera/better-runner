import type { Activity } from "./activity";
import type { IntervalType } from "./interval-type";

export type RunType = "FARTLEK" | "SLOW_RUN" | "RACE" | "BY_FEEL";

export type Interva = {
  type: IntervalType;
  distanceKm: number;
  durationSeconds: number;
  averagePaceMinutesPerKm: number;
  averagePowerW: number;
  averageHeartRate: number;
  averageCadence: number;
};

export type Run<Races extends string> = (
  | {
      type: "SLOW_RUN" | "BY_FEEL";
    }
  | {
      type: "FARTLEK";
      intervals: Interva[];
    }
  | {
      type: "RACE";
      raceName: Races;
    }
) & {
  averagePaceMinutesPerKm: number;
  elevationGainMeters: number;
  averageCadence: number;
} & Activity;
