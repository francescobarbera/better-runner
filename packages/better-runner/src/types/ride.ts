import type { Activity } from "./activity";

export type RideType = "INDOOR" | "OUTDOOR";

export type Ride = (
  | {
      type: "INDOOR";
    }
  | {
      type: "OUTDOOR";
      elevationGainMeters: number;
    }
) & {
  averagePaceKmPerHour: number;
  averageRPM: number;
} & Activity;
