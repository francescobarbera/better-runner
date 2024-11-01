import type { Run } from "../types/run";

type Races = "10k in my hometown" | "Berlin Half Marathon" | "NY Marathon";

const runs: Run<Races>[] = [
  {
    type: "SLOW_RUN",
    date: "2024-09-17",
    distanceKm: 9.5,
    durationSeconds: 3124,
    averagePaceMinutesPerKm: 5.29,
    averageHeartRate: 141,
    averageCadence: 85,
    averagePowerW: 200,
    elevationGainMeters: 57,
    withHeartRateMonitor: true,
    activeKilocalories: 500,
    comment: "A good slow run with some music",
    externalLinks: [
      {
        platform: "STRAVA",
        url: "https://www.strava.com/activities/my-activity-1",
      },
    ],
  },
];

export default runs;
