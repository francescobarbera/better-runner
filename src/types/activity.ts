import type { ExternalLink } from "./external-link";

export type Activity = {
  date: string;
  distanceKm: number;
  durationSeconds: number;
  averageHeartRate: number;
  withHeartRateMonitor: boolean;
  activeKilocalories: number;
  averagePowerW: number;
  comment: string;
  externalLinks: ExternalLink[];
};
