import { randNumber, rand, randRecentDate, randBoolean } from "@ngneat/falso";
import type { Run, RunType } from "../types/run";
import type { Platforms } from "../types/external-link";
import type { IntervalType } from "../types/interval-type";

export type Races = "10k" | "Marathon" | "Half marathon";

export function makeARun(): Run<Races> {
  const runType = rand(["FARTLEK", "SLOW_RUN", "RACE", "BY_FEEL"] as RunType[]);

  const baseRun: Omit<Run<Races>, "type"> = {
    date: randRecentDate().toISOString(),
    withHeartRateMonitor: randBoolean(),
    distanceKm: randNumber({ min: 1, max: 20, fraction: 2 }),
    durationSeconds: randNumber({ min: 60 * 10, max: 60 * 60 * 2 }),
    averageHeartRate: randNumber({ min: 120, max: 180 }),
    comment: "This is a comment",
    externalLinks: Array.from(
      { length: randNumber({ min: 1, max: 3 }) },
      () => ({
        platform: rand(["STRAVA", "GARMIN", "SUUNTO"] as Platforms[]),
        url: "https://www.url.com",
      }),
    ),
    averagePaceMinutesPerKm: randNumber({ min: 4, max: 6, fraction: 2 }),
    elevationGainMeters: randNumber({ min: 0, max: 100 }),
    averageCadence: randNumber({ min: 100, max: 200 }),
    averagePowerW: randNumber({ min: 100, max: 300 }),
    activeKilocalories: randNumber({ min: 100, max: 1000 }),
  };

  if (runType === "FARTLEK") {
    return {
      ...baseRun,
      type: "FARTLEK",
      intervals: Array.from(
        { length: randNumber({ min: 1, max: 10 }) },
        () => ({
          type: rand([
            "KM",
            "WARMUP",
            "COOLDOWN",
            "WORK",
            "REST",
          ] as IntervalType[]),
          distanceKm: randNumber({ min: 0, max: 5, fraction: 2 }),
          durationSeconds: randNumber({ min: 10, max: 60 * 5 }),
          averagePaceMinutesPerKm: randNumber({ min: 4, max: 6, fraction: 2 }),
          averageCadence: randNumber({ min: 100, max: 200 }),
          averagePowerW: randNumber({ min: 100, max: 300 }),
          averageHeartRate: randNumber({ min: 120, max: 180 }),
        }),
      ),
    };
  }

  if (runType === "RACE") {
    return {
      ...baseRun,
      type: "RACE",
      raceName: rand(["10k", "Marathon", "Half marathon"]),
    };
  }

  return { ...baseRun, type: runType };
}
