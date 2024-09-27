import type { Ride } from "../types/ride";

const rides: Ride[] = [
  {
    type: "INDOOR",
    distanceKm: 25.03,
    durationSeconds: 45 * 60 + 6,
    date: "2024-09-26",
    averagePaceKmPerHour: 33.1,
    comment: "Usual indoor ride during lunch break",
    averageHeartRate: 134,
    withHeartRateMonitor: true,
    externalLinks: [
      {
        platform: "STRAVA",
        url: "https://www.strava.com/activities/my-activity-1",
      },
    ],
  },
];

export default rides;
