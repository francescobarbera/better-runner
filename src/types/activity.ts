import type { ExternalLink } from "./external-link";

export type Activity = {
  date: string;
  withHeartRateMonitor: boolean;
  distanceKm: number;
  durationSeconds: number;
  averageHeartRate: number;
  comment: string;
  externalLinks: ExternalLink[];
};
