import type { Activity } from "./activity";

export type RideType = "INDOOR" | "OUTDOOR";

export type Ride = (
  | {
      type: "INDOOR";
    }
  | {
      type: "OUTDOOR";
      elevetionGainMeters: number;
    }
) & {
  averagePaceKmPerHour: number;
  averageRPM: number;
} & Activity;
