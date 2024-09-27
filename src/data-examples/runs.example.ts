import type { Run } from "../types/run";

const run: Run[] = [
  {
    type: "SLOW_RUN",
    distanceKm: 9.5,
    durationSeconds: 3124,
    date: "2024-09-17",
    averagePaceMinutesPerKm: 5.29,
    comment: "A good slow run with some music",
    elevetionGainMeters: 57,
    averageHeartRate: 141,
    withHeartRateMonitor: true,
    externalLinks: [
      {
        platform: "STRAVA",
        url: "https://www.strava.com/activities/my-activity-1",
      },
    ],
  },
  {
    type: "BY_FEEL",
    distanceKm: 10.17,
    durationSeconds: 3278,
    date: "2024-09-18",
    averagePaceMinutesPerKm: 5.22,
    comment: "Test with the new shoes",
    elevetionGainMeters: 83,
    averageHeartRate: 140,
    withHeartRateMonitor: true,
    externalLinks: [
      {
        platform: "STRAVA",
        url: "https://www.strava.com/activities/my-activity-2",
      },
    ],
  },
];

export default run;
