import { randNumber, rand, randRecentDate, randBoolean } from "@ngneat/falso";
import type { Run, RunType } from "../types/run";
import type { Platforms } from "../types/external-link";
import type { SplitType } from "../types/split-type";

export function makeARun(): Run {
  const runType = rand(["FARTLEK", "SLOW_RUN", "RACE", "BY_FEEL"] as RunType[]);

  const baseRun = {
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
    elevetionGainMeters: randNumber({ min: 0, max: 100 }),
  };

  if (runType === "FARTLEK") {
    return {
      ...baseRun,
      type: "FARTLEK",
      customSplits: Array.from(
        { length: randNumber({ min: 1, max: 10 }) },
        () => ({
          type: rand([
            "KM",
            "WORMUP",
            "COOLDOWN",
            "INTERVAL",
            "REST",
          ] as SplitType[]),
          minuteKm: randNumber({ min: 4, max: 6, fraction: 2 }),
          elevetionGainMeters: randNumber({ min: 0, max: 100 }),
          averageHeartRate: randNumber({ min: 120, max: 180 }),
        }),
      ),
    };
  }

  return {
    ...baseRun,
    type: runType,
  };
}
