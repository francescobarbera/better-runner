import type { Ride } from "../types/ride";

const rides: Ride[] = [
  {
    type: "INDOOR",
    distanceKm: 25.03,
    date: "2024-09-26",
    durationSeconds: 45 * 60 + 6,
    averagePaceKmPerHour: 33.1,
    averageRPM: 90,
    averageHeartRate: 134,
    averagePowerW: 200,
    withHeartRateMonitor: true,
    activeKilocalories: 500,
    comment: "Usual indoor ride during lunch break",
    externalLinks: [
      {
        platform: "STRAVA",
        url: "https://www.strava.com/activities/my-activity-1",
      },
    ],
  },
];

export default rides;
